$(document).ready(function() {

	// Get Money Raised Data and Adjust Progress Bar

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

		var goal = 5000;
		var money_raised = 2500;
		var current_money = (money_raised / goal) * 100;

		$("#money_raised_bar").css({"width": current_money + "%" });
		$("#money_raised_bar").attr("aria-valuenow", current_money);
		$("#current_money").text("$" + money_raised);

		var status = textStatus + ", " + error;
		console.log( "Request Failed: " + status );

	});

	// Validate Input Fields and Send Email
	$("#send_email").click(function() {

		event.preventDefault();

		var name = $("#name").val();
		var email = $("#email").val();
		var committe = $("#committe").val();
		var subject = $("#subject").val();
		var message  = $("#message").val();

		if(name === '' || name.length === 0) {

			alert("Name is required.");
			$("#name").focus();
            return false;
		}

		if(email === '' || email.length === 0) {

			alert("Email is required.");
			$("#email").focus();
            return false;
		}

		if(subject === '' || subject.length === 0) {

			alert("Subject is required.");
			$("#subject").focus();
            return false;
		}

		if(message === '' || message.length === 0) {

			alert("Message is required.");
			$("#message").focus();
            return false;
		} else {

			$.post("server/email.php",
				{ name: name,
				  email: email,
				  committe: committe,
				  subject: subject,
				  message: message
				}
			).done(function() {

				//Confirmation takes too long and we can't wait..time for a hail mary play
				alert("Email was sent! Thank you.");
				$('#contact_form').trigger("reset");

			});
		}
	});

  // Image Gallery Initiation and Settings
  // **VIDEO POP-UP ONLY WORK IN A SERVER**
	$('.swipebox').swipebox();
	$('.swipebox-video').swipebox();

});
