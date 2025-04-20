(function () {
  // API Service
  const API_BASE_URL = "http://localhost:3000/api";

  async function createPrintingJob(jobData) {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });
    return await response.json();
  }

  async function getPrintingJobs() {
    const response = await fetch(`${API_BASE_URL}/jobs`);
    return await response.json();
  }

  async function getPricing() {
    const response = await fetch(`${API_BASE_URL}/pricing`);
    return await response.json();
  }

  async function generatePDF(jobId) {
    const response = await fetch(`${API_BASE_URL}/generate-pdf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobId),
    });
    return await response.json();
  }

  async function fetchPricingData() {
    const response = await fetch(`${API_BASE_URL}/pricing`);
    return await response.json();
  }

  async function fetchSelectBahanData() {
    const response = await fetch(`${API_BASE_URL}/options/paperType`);
    return await response.json();
  }
  


  // Expose functions to the global scope (if needed)
  window.createPrintingJob = createPrintingJob;
  window.getPrintingJobs = getPrintingJobs;
  window.getPricing = getPricing;
  window.generatePDF = generatePDF;
  window.fetchPricingData = fetchPricingData;
  
  window.fetchSelectBahanData = fetchSelectBahanData;

  window.fetchSelectCardTypeData = async function fetchSelectCardTypeData() {
    const response = await fetch(`${API_BASE_URL}/options/cardType`);
    return await response.json();
  }

  window.fetchSelectCalendarTypeData = async function fetchSelectCalendarTypeData() {
    const response = await fetch(`${API_BASE_URL}/options/calendarType`);
    return await response.json();
  }

  window.fetchSelectCustomerTypeData = async function fetchSelectCustomerTypeData() {
    const response = await fetch(`${API_BASE_URL}/options/customerType`);
    return await response.json();
  }

  window.fetchSelectPaperTypeData = async function fetchSelectPaperTypeData() {
    const response = await fetch(`${API_BASE_URL}/options/paperType`);
    return await response.json();
  }
})();
