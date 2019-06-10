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