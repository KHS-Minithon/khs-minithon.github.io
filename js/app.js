$(document).ready(function() {

	// Get Money Raised Data and Adjust Progress Bar
	// Spreadsheet: https://docs.google.com/spreadsheets/d/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/pubhtml & https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic?alt=json
	var khs_spreadsheet = "https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic/d9ney";

	  $.ajax({
    url: "https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic/d9ney",
    type: "GET",
    dataType: "xml",
	success: function(xml) {
        	var xml = $.parseXML(xml)
        	var money_raised = $(xml).find('content'); 
    }       
    );
	
		var goal = 65000;
		var current_money = (money_raised / goal) * 100;

		if(current_money > 100) {
			$("#money_raised_bar").css({"width": 100 + "%" });
		} else {
			$("#money_raised_bar").css({"width": current_money + "%" });
		}

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
