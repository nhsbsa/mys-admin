/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

$("#radio-inline-q1").change(function() {
	$(".acceptanceCriteria").removeClass("visually-hidden");
});

$("#radio-inline-q1-no").change(function() {
  $(".acceptanceCriteria").addClass("visually-hidden");
  $(".acceptanceCriteria2").addClass("visually-hidden");
});

$("#radio-inline-q2").change(function() {
	$(".acceptanceCriteria2").removeClass("visually-hidden");
});

$("#radio-inline-q2-no").change(function() {
	$(".acceptanceCriteria2").addClass("visually-hidden");
});

$("#radio-inline-q4").change(function() {
	$(".acceptanceCriteria4").removeClass("visually-hidden");
});

$("#radio-inline-q4-no").change(function() {
	$(".acceptanceCriteria4").addClass("visually-hidden");
});

$("#radio-inline-q5").change(function() {
	$(".acceptanceCriteria5").removeClass("visually-hidden");
});

$("#radio-inline-q5-no").change(function() {
	$(".acceptanceCriteria5").addClass("visually-hidden");
});
