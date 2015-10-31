$(document).ready(function() {

	// Get Money Raised Data and Adjust Progress Bar
	// Spreadsheet: https://docs.google.com/spreadsheets/d/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/pubhtml
	var khs_spreadsheet = "https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic?alt=json";

	$.getJSON(khs_spreadsheet).done(function(data) {

		var money_raised = 0;

		for (var i = 1; i < data.feed.entry.length; i++) {

			if (data.feed.entry[i].content['$t'].length > 0) {

				var entry = data.feed.entry[i].content['$t'];

				money_raised += parseInt(entry.replace(/[^0-9.]/g, ""));
			}
		};

		var goal = 5000;
		var current_money = (money_raised / goal) * 100;

		$("#money_raised_bar").css({"width": current_money + "%" });
		$("#money_raised_bar").attr("aria-valuenow", current_money);
		$("#current_money").text("$" + money_raised);

	}).fail(function(jqxhr, textStatus, error ) {

		var status = textStatus + ", " + error;
		console.error("Request Failed: " + status );

	});

  // Image Gallery Initiation and Settings
  // **VIDEO POP-UP ONLY WORK IN A SERVER**
	$('.swipebox').swipebox();
	$('.swipebox-video').swipebox();

});
