var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// REPORTS DOWNLOAD

router.get(/downloadreports-handler/, function (req, res) {
  if (req.query.reports.includes('fp34c')) {
    res.redirect('/public/images/bsa/MYS Report - FP34c.xlsx');
  } else if (req.query.reports.includes('returns')) {
    res.redirect('/public/images/bsa/MYS Report - Prescription Returns.xlsx');
  } else if (req.query.reports.includes('flu')) {
    res.redirect('/public/images/bsa/MYS Report - Flu Submissions.xlsx');
  } else if (req.query.reports.includes('numsas')) {
    res.redirect('reports3');
  } else {
    res.redirect('reports3');
  }
});

router.get(/reportrange-handler/, function (req, res) {
  if (req.query.reportrange.includes('singlemonth')) {
    res.redirect('month');
  } else if (req.query.reportrange.includes('monthrange')) {
    res.redirect('reports-range');
  } else {
    res.redirect('reports2');
  }
});


// Repeat Dispensing //
// repeatOne is the action from your <form> //
router.get(/repeatOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('cpaf-prescription-based-interventions-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-repeat-dispensing-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
// repeatThree is the action from your <form> //
router.get(/repeatThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" ) {
    res.redirect('cpaf-repeat-dispensing-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-prescription-based-interventions-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Prescription based interventions //
// interventionsOne is the action from your <form> //
router.get(/interventionsOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" ) {
    res.redirect('cpaf-prescription-based-interventions-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-signposting-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
// interventionsTwo is the action from your <form> //
router.get(/interventionsTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" ) {
    res.redirect('cpaf-prescription-based-interventions-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-signposting-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Signposting //
router.get(/signpostingOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('cpaf-signposting-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-governance-risk-management-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/signpostingTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('cpaf-signposting-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-governance-risk-management-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Clinical Governance - risk management //
router.get(/riskOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('cpaf-governance-risk-management-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-governance-locums-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/riskTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" && req.query.radioInlineGroup3 === "Yes" ) {
    res.redirect('cpaf-governance-risk-management-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-governance-locums-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Clinical Governance - locums //
router.get(/locumsOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes") {
    res.redirect('cpaf-governance-locums-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-training-performance-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/locumsTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" && req.query.radioInlineGroup3 === "Yes" ) {
    res.redirect('cpaf-governance-locums-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-training-performance-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Training and performance //
router.get(/trainingOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" && req.query.radioInlineGroup3 === "Yes") {
    res.redirect('cpaf-training-performance-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-safeguarding-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/trainingTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" && req.query.radioInlineGroup3 === "Yes" && req.query.radioInlineGroup4 === "Yes") {
    res.redirect('cpaf-training-performance-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-safeguarding-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Safeguarding //
router.get(/safeguardingOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" && req.query.radioInlineGroup3 === "Yes" ) {
    res.redirect('cpaf-safeguarding-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-pharmacy-audit-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/safeguardingTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" ) {
    res.redirect('cpaf-safeguarding-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-pharmacy-audit-l1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Pharmacy based audit //
router.get(/auditOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('cpaf-pharmacy-audit-l2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-feedback'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" && req.query.radioInlineGroup2 === "Yes" && req.query.radioInlineGroup3 === "Yes" ) {
    res.redirect('cpaf-pharmacy-audit-l3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpaf-feedback'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// NSAIDs Add Another //
router.get(/addOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-Patient-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-met-requirements'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-Patient-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-audit-end-date'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-audit-end-date'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-audit-end-date'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addFour/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-patient-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-check-your-answers2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addFive/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-ko'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-audit-start-date'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// NSAIDs requirements not met //
router.get(/notMetOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-Patient-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-save-for-later2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// NSAIDs add another NSAID //
router.get(/addMedsOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-Meds-prescribed'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-other-meds'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addMedsTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-another-nsaid'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-dosage-details'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// CPCS register//
router.get(/cpcsRegister/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('cpcs-dec'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('index'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// CPCS De-reg//
router.get(/deRegister/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('cpcs-dereg-confirm'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpcs-start'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// CPAF Questionnnaire FULL//
// appliancesOne is the action from your <form> //
router.get(/appliancesOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('cpafq-appliances'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpafq-eps-enabled'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// appliancesTwo is the action from your <form> //
router.get(/appliancesTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('cpafq-apps-del-supply'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpafq-eps-enabled'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// epssOne is the action from your <form> //
router.get(/epsOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes") {
    res.redirect('cpafq-eps'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('cpafq-eps-signpost'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});


