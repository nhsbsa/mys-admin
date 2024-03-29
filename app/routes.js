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
  } else if (req.query.reports.includes('../cpcs')) {
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
    res.redirect('NSAID-audit-end-date'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addFive/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('NSAID-ko'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('NSAID-audit-start-date'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

//PQS routes //

//PQS Gateway kickout //
router.get(/addSix/, function (req, res) {
  if (req.query.radioInlineGroup === "No" ) {
    res.redirect('pqs-gateway-ko'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-tasklist1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

//PQS domain 2 audit kickout //
router.get(/domainNotMetOne/, function (req, res) {
  if (req.query.incomesingle === "lithium-audit") {
    res.redirect('pqs-d2-audit2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.incomesingle === "methotrexate-audit") {
    res.redirect('pqs-d2-audit2');
  } else if (req.query.incomesingle === "amiodarone-audit") {
    res.redirect('pqs-d2-audit2');
  } else if (req.query.incomesingle === "phenobarbital-audit") {
    res.redirect('pqs-d2-audit2');
  } else if (req.query.incomesingle === "none-of-these") {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    return;
  }
});

router.get(/domainNotMetTwo/, function (req, res) {
  if (req.query.incomesingle === "lithium-audit") {
    res.redirect('pqs-d2-lithium'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.incomesingle === "methotrexate-audit") {
    res.redirect('pqs-d2-methotrexate');
  } else if (req.query.incomesingle === "amiodarone-audit") {
    res.redirect('pqs-d2-amiodarone');
  } else if (req.query.incomesingle === "phenobarbital-audit") {
    res.redirect('pqs-d2-phenobarbital');
  } else if (req.query.incomesingle === "none-of-these") {
    res.redirect('pqs-d2-phenobarbital-audit-dates'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    return;
  }
});

router.get(/domainNotMetThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-lithium-audit'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/auditCompleteOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-methotrexate-audit'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-amiodarone-audit'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-phenobarbital-audit'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteFour/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-d2-valproate'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteFive/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-lithium-identified'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-audit-dates'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteSix/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-lithium'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-audit-dates'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteSeven/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-methotrexate'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-audit-dates'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteEight/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-amiodarone'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-audit-dates'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteNine/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-phenobarbital'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-audit-dates'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/auditCompleteTen/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d2-tasklist'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-d2-tasklist'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/primaryCareNetworkOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-tasklist-9'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/primaryCareNetworkTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-not-pcn-lead'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/diabetesAuditOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-d3-diabetes-discuss'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-prevention-cya'); // if both input values are "Yes" - redirect to 'page-name' //
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

// Hep C De-reg//
router.get(/deRegisterHep/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('hep-c-dereg-confirm'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('hep-c-start-dereg'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/deRegisterHep/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('hep-c-dereg-confirm'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('hep-c-start-dereg'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
// Hep C register//
router.get(/hepRegister/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('hep-c-reg'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('../index'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Hep C previous month//
router.get(/hepPreviousMonth/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('hep-c-month'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('hep-c-declare-submit2'); // if both input values are "Yes" - redirect to 'page-name' //
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


// NSAIDs add another anticoagulant //
router.get(/addMedsThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('aca-acs-prescribed-2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('aca-nsaids-prescribed'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addMedsFour/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('aca-acs-prescribed-2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('aca-check-combo'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// Flu submissions 2020 //
router.get(/fluOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('flu-api-submit'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('flu'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/fluTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('flu-api-start-months2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('flu-submission2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/fluThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('flu-another-month'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('flu-step2-oct'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/fluFour/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('flu-api-start-months2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('flu-submission'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/fluFive/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('flu-submission3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('flu-step2-sept'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// PQS 20/21 //
router.get(/pqsOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead-present'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "No" ){
    res.redirect('pqs-pharmacy-lead'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-gateway-cya-7'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/pqsTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-gateway-cya-7'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/pqsThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pharmacy-lead-questions'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "No") {
    res.redirect('pqs-pharmacy-non-lead-questions');
  } else {
    res.redirect('pqs-gateway-cya-7'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});
router.get(/pqsFour/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead-questions'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('pqs-pcn-non-lead-questions');
  }
});

// DMS routes //
router.get(/dmsOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-s1-issues'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-s1-cya');
  }
});
router.get(/dmsTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-oct-s1-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-oct-start2');
  }
});
router.get(/dmsThree/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-s2-issues'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-s2-cya');
  }
});
router.get(/dmsFour/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-oct-s2-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-oct-start3');
  }
});
router.get(/dmsFive/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-s3-issues'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-s3-cya');
  }
});
router.get(/dmsSix/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-oct-s3-referral'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-oct-start4');
  }
});
router.get(/dmsSeven/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-s1-issues'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-s2-provided');
  }
});
router.get(/dmsEight/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-s2-issues'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-s3-provided');
  }
});
router.get(/dmsNine/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-s3-issues'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-cya');
  }
});
router.get(/dmsTen/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('dms-referral-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('dms-declare');
  }
});

// AUR submission routes //

router.get(/aurOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('aur-appliance'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('aur-cya');
  }
});
router.get(/aurTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('aur-pharmacy'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('aur-declare');
  }
});

// covid vaccs //
router.get(/covidOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('covid-api-start-months'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('covid-submission'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// PQS 20/21 //
router.get(/pqsGOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead-present'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "No" ){
    res.redirect('pqs-pharmacy-lead'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// PQS 20/21 //
router.get(/pqsAddP/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-pcn-lead-journey-11'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "No" ){
    res.redirect('pqs-pcn-lead-journey-cya'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// PQS 20/21 //
router.get(/pqsAddpharm/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('pqs-non-pcn-lead-journey-11'); // if both input values are "Yes" - redirect to 'page-name' //
  } else if (req.query.radioInlineGroup === "No" ){
    res.redirect('pqs-non-pcn-lead-journey-cya'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

// FP34C //
router.get(/noPaper/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('total-warning-p25'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('enter-fields-e05'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});