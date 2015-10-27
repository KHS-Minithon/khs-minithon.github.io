$(document).ready(function() {

	// Get Money Raised Data and Adjust Progress Bar
	

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

			$.post("http://localhost:3000/email",
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
