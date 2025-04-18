const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PrismaClient } = require("./generated/prisma/client");
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Pricing calculation logic (matches the frontend calculations)
function calculatePrice(paperType, quantity) {
  // Pricing logic from a3.js
  if (paperType === "hvs") {
    if (quantity <= 2) return 5000;
    if (quantity <= 19) return 3500;
    if (quantity <= 59) return 2750;
    if (quantity <= 99) return 2250;
    return 2000;
  }
  // Add other paper types similarly...
  return 0;
}

// CRUD endpoints for PrintingJobs
app.post("/api/jobs", async (req, res) => {
  try {
    const {
      paperType,
      width,
      height,
      quantity,
      isCutting,
      isDesign,
      fileName,
    } = req.body;
    const { status } = req.body;

    // Validate status
    if (
      status &&
      !["pending", "processing", "completed", "rejected"].includes(status)
    ) {
      return res.status(400).json({ error: "Invalid status value" });
    }
    const basePrice = calculatePrice(paperType, quantity);
    const cuttingCost = isCutting ? Math.ceil(quantity / 500) * 10000 : 0;
    const designCost = isDesign ? 20000 : 0;
    const totalPrice = basePrice * quantity + cuttingCost + designCost;

    const job = await prisma.printingJob.create({
      data: {
        paperType,
        width,
        height,
        quantity: parseInt(quantity),
        isCutting,
        isDesign,
        fileName,
        totalPrice,
        status,
      },
    });

    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await prisma.printingJob.findMany();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Pricing endpoints
app.get("/api/pricing", async (req, res) => {
  try {
    const pricing = await prisma.pricing.findMany();
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Bahan endpoint
app.get("/api/bahan", async (req, res) => {
  try {
    const bahan = [
      { value: "ac", label: "Art Carton" },
      { value: "ap", label: "Art Paper" },
      { value: "sc", label: "Sticker Chromo" },
      { value: "sv", label: "Sticker Vinyl" },
    ];
    res.json(bahan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Additional CRUD endpoints
app.get("/api/jobs/:id", async (req, res) => {
  try {
    const job = await prisma.printingJob.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/jobs/:id", async (req, res) => {
  try {
    const {
      paperType,
      width,
      height,
      quantity,
      isCutting,
      isDesign,
      fileName,
    } = req.body;
    const { status } = req.body;
    const updatedJob = await prisma.printingJob.update({
      where: { id: parseInt(req.params.id) },
      data: {
        paperType,
        width,
        height,
        quantity,
        isCutting,
        isDesign,
        fileName,
      },
    });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/jobs/:id", async (req, res) => {
  try {
    await prisma.printingJob.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PDF generation endpoint
app.post("/api/generate-pdf", async (req, res) => {
  try {
    const { id } = req.body;
    const job = await prisma.printingJob.findUnique({
      where: { id: parseInt(id) },
    });

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    const pdfUrl = `https://example.com/generated-${job.id}.pdf`;

    await prisma.printingJob.update({
      where: { id: parseInt(id) },
      data: { pdfUrl: pdfUrl },
    });

    res.json({
      pdfUrl: pdfUrl,
      message: "PDF generated successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Validation middleware
function validatePrintingJob(req, res, next) {
  const { paperType, width, height, quantity } = req.body;

  if (!paperType || !width || !height || !quantity) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (
    typeof width !== "number" ||
    typeof height !== "number" ||
    typeof quantity !== "number"
  ) {
    return res.status(400).json({ error: "Invalid data types" });
  }

  if (quantity <= 0) {
    return res.status(400).json({ error: "Quantity must be positive" });
  }

  next();
}

// Apply validation to relevant routes
app.post("/api/jobs", validatePrintingJob, async (req, res) => {
  // Existing post handler
});

app.put("/api/jobs/:id", validatePrintingJob, async (req, res) => {
  // Existing put handler
});

// API documentation endpoint
app.get("/api-docs", (req, res) => {
  const docs = {
    endpoints: [
      {
        method: "POST",
        path: "/api/jobs",
        description: "Create a new printing job",
        bodyParams: {
          paperType: "string (required)",
          width: "number (required)",
          height: "number (required)",
          quantity: "number (required)",
          isCutting: "boolean",
          isDesign: "boolean",
          fileName: "string",
        },
      },
      {
        method: "GET",
        path: "/api/jobs",
        description: "Get all printing jobs",
      },
      {
        method: "GET",
        path: "/api/jobs/:id",
        description: "Get a specific printing job",
      },
      {
        method: "PUT",
        path: "/api/jobs/:id",
        description: "Update a printing job",
      },
      {
        method: "DELETE",
        path: "/api/jobs/:id",
        description: "Delete a printing job",
      },
      {
        method: "POST",
        path: "/api/generate-pdf",
        description: "Generate PDF from job data",
      },
    ],
  };
  res.json(docs);
});
