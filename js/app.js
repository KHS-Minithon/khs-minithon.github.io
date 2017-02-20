$(document).ready(function() {

	// Get Money Raised Data and Adjust Progress Bar
	// Spreadsheet: https://docs.google.com/spreadsheets/d/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/pubhtml & https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic?alt=json
	var khs_spreadsheet = "https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic/d9ney";

//	  $.ajax({
 //   url: "https://spreadsheets.google.com/feeds/list/1PE1umwfQwSwaNxX_Hishe8kKmcNPRQmRBv-GrPrBFDw/od6/public/basic/d9ney",
  //  type: "GET",
   // dataType: "xml",
//	success: function(data) {
  //      	 var xmlDoc = $.parseXML(data),
 	//	 $xmlDoc = $(xmlDoc),
  //		xml = $xmlDoc.find("<content type='text'>");
	//	var money_raised = xml

		
	 
	
        	
           
    
		var money_raised = 32402;
		var goal = 65000;
		var current_money = (money_raised / goal) * 100;
		var current_moneyrounded = Math.floor(current_money);

		if(current_money > 100) {
			$("#money_raised_bar").css({"width": 100 + "%" });
		} else {
			$("#money_raised_bar").css({"width": current_money + "%" });
		}

		$("#money_raised_bar").attr("aria-valuenow", current_money);
    $("#current_money").replaceWith(money_raised);
		$("#percentagetext").replaceWith(current_moneyrounded);

	})
	//.fail(function(jqxhr, textStatus, error ) {

//		var status = textStatus + ", " + error;
//		console.error("Request Failed: " + status );
//
//	});

  // Image Gallery Initiation and Settings
  // **VIDEO POP-UP ONLY WORK IN A SERVER**
	$('.swipebox').swipebox();
	$('.swipebox-video').swipebox();

