const { PrismaClient } = require("./generated/prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // Clear existing data
  await prisma.pricing.deleteMany();

  // Seed pricing data matching a3.js
  const pricingData = [
    {
      paperType: "hvs",
      range1_2: 5000,
      range3_19: 3500,
      range20_59: 2750,
      range60_99: 2250,
      range100: 2000,
      cuttingCost: 10000,
      designCost: 20000,
    },
    {
      paperType: "ap",
      range1_2: 5000,
      range3_19: 3500,
      range20_59: 2750,
      range60_99: 2250,
      range100: 2000,
      cuttingCost: 10000,
      designCost: 20000,
    },
    {
      paperType: "ac",
      range1_2: 5000,
      range3_19: 4000,
      range20_59: 3500,
      range60_99: 3250,
      range100: 3000,
      cuttingCost: 10000,
      designCost: 20000,
    },
    {
      paperType: "fc",
      range1_2: 5500,
      range3_19: 4500,
      range20_59: 4000,
      range60_99: 3750,
      range100: 3500,
      cuttingCost: 10000,
      designCost: 20000,
    },
    {
      paperType: "sc",
      range1_2: 5500,
      range3_19: 4250,
      range20_59: 4000,
      range60_99: 3750,
      range100: 3500,
      cuttingCost: 15000,
      designCost: 20000,
    },
    {
      paperType: "sv",
      range1_2: 9000,
      range3_19: 8000,
      range20_59: 7500,
      range60_99: 7250,
      range100: 7000,
      cuttingCost: 15000,
      designCost: 20000,
    },
  ];

  for (const data of pricingData) {
    await prisma.pricing.create({ data });
  }

  console.log("Database seeded successfully");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
