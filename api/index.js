const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const printingJobRoutes = require('./routes/printingJobRoutes');
const pricingRoutes = require('./routes/pricingRoutes');
const optionRoutes = require('./routes/optionRoutes');
// const docsRoutes = require("./routes/docsRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use('/api/jobs', printingJobRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/options', optionRoutes);
// app.use("/api-docs", docsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
