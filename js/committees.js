function committeeEntertainment()
{
        document.getElementById("committeeEntertainmentId").onclick = function() { committeeEntertainmentReset(); }
        document.getElementById("committeeEntertainmentText1").innerHTML = "Members";
        document.getElementById("committeeEntertainmentText1").setAttribute("style", "margin-top:5%;");
        document.getElementById("committeeEntertainmentText2").innerHTML = "This feature is a work in progress.";
        document.getElementById("committeeEntertainmentText3").innerHTML = "(Click to view committee heads!)";
}

function committeeEntertainmentReset()
{
        document.getElementById("committeeEntertainmentId").onclick = function() { committeeEntertainment(); }
        document.getElementById("committeeEntertainmentText1").innerHTML = "Entertainment / Morale";
        document.getElementById("committeeEntertainmentText1").setAttribute("style", "margin-top:40%;");
        document.getElementById("committeeEntertainmentText2").innerHTML = "Jackie Tucker, Anna Wilson, and Erin Duffy";
        document.getElementById("committeeEntertainmentText3").innerHTML = "(Click to view members!)";
}

function committeeOperations()
{
        document.getElementById("committeeOperationsId").onclick = function() { committeeOperationsReset(); }
        document.getElementById("committeeOperationsText1").innerHTML = "Members";
        document.getElementById("committeeOperationsText1").setAttribute("style", "margin-top:5%;");
        document.getElementById("committeeOperationsText2").innerHTML = "This feature is a work in progress.";
        document.getElementById("committeeOperationsText3").innerHTML = "(Click to view committee heads!)";
}

function committeeOperationsReset()
{
        document.getElementById("committeeOperationsId").onclick = function() { committeeOperations(); }
        document.getElementById("committeeOperationsText1").innerHTML = "Operations";
        document.getElementById("committeeOperationsText1").setAttribute("style", "margin-top:40%;");
        document.getElementById("committeeOperationsText2").innerHTML = "Molly Adelman";
        document.getElementById("committeeOperationsText3").innerHTML = "(Click to view members!)";
}

function committeeHospitality()
{
        document.getElementById("committeeHospitalityId").onclick = function() { committeeHospitalityReset(); }
        document.getElementById("committeeHospitalityText1").innerHTML = "Members";
        document.getElementById("committeeHospitalityText1").setAttribute("style", "margin-top:5%;");
        document.getElementById("committeeHospitalityText2").innerHTML = "This feature is a work in progress.";
        document.getElementById("committeeHospitalityText3").innerHTML = "(Click to view committee heads!)";
}

function committeeHospitalityReset()
{
        document.getElementById("committeeHospitalityId").onclick = function() { committeeHospitality(); }
        document.getElementById("committeeHospitalityText1").innerHTML = "Hospitality";
        document.getElementById("committeeHospitalityText1").setAttribute("style", "margin-top:40%;");
        document.getElementById("committeeHospitalityText2").innerHTML = "Ben Skross and Olivia Pagliaro";
        document.getElementById("committeeHospitalityText3").innerHTML = "(Click to view members!)";
}

function committeeTechnology()
{
        document.getElementById("committeeTechnologyId").onclick = function() { committeeTechnologyReset(); }
        document.getElementById("committeeTechnologyText1").innerHTML = "Members";
        document.getElementById("committeeTechnologyText1").setAttribute("style", "margin-top:5%;");
        document.getElementById("committeeTechnologyText2").innerHTML = "Tamblyn Mitchell, Will Michaels, MJ<br>Patterson, Meredith Mitchell, Melissa Houck";
        document.getElementById("committeeTechnologyText3").innerHTML = "(Click to view committee heads!)";
}

function committeeTechnologyReset()
{
        document.getElementById("committeeTechnologyId").onclick = function() { committeeTechnology(); }
        document.getElementById("committeeTechnologyText1").innerHTML = "Technology";
        document.getElementById("committeeTechnologyText1").setAttribute("style", "margin-top:40%;");
        document.getElementById("committeeTechnologyText2").innerHTML = "Michael Bellino";
        document.getElementById("committeeTechnologyText3").innerHTML = "(Click to view members!)";
}

function committeePR()
{
        document.getElementById("committeePRId").onclick = function() { committeePRReset(); }
        document.getElementById("committeePRText1").innerHTML = "Members";
        document.getElementById("committeePRText1").setAttribute("style", "margin-top:5%;");
        document.getElementById("committeePRText2").innerHTML = "";
        document.getElementById("committeePRText3").innerHTML = "(Click to view committee heads!)";
}

function committeePRReset()
{
        document.getElementById("committeePRId").onclick = function() { committeePR(); }
        document.getElementById("committeePRText1").innerHTML = "Public Relations";
        document.getElementById("committeePRText1").setAttribute("style", "margin-top:40%;");
        document.getElementById("committeePRText2").innerHTML = "Sami Castleton and Sam Weaver";
        document.getElementById("committeePRText3").innerHTML = "(Click to view members!)";
}

function committeeEvents()
{
        document.getElementById("committeeEventsId").onclick = function() { committeeEventsReset(); }
        document.getElementById("committeeEventsId").setAttribute("style", "padding-left:5%; padding-right:5%; cursor:pointer;")
        document.getElementById("committeeEventsText1").innerHTML = "Members";
        document.getElementById("committeeEventsText1").setAttribute("style", "margin-top:5%;");
        document.getElementById("committeeEventsText2").setAttribute("style", "width:80%; height:auto;");
        document.getElementById("committeeEventsText2").innerHTML = "Ashton Alberts,  MJ Patterson,  Chloe Price,  Susy Casini,  Danielle Phillips,<br>Neil Erickson,  Madison Brown,<br>Jayna Bruno,  Tyler Bowdoin,  Claire Dawyot,<br>Emily Funkhouser,  Katie Wiley,  and<br>Kaitlyn Devonshire.";
        document.getElementById("committeeEventsText3").innerHTML = "(Click to view committee heads!)";
}

function committeeEventsReset()
{
        document.getElementById("committeeEventsId").onclick = function() { committeeEvents(); }
        document.getElementById("committeeEventsText1").innerHTML = "Special Events";
        document.getElementById("committeeEventsText1").setAttribute("style", "margin-top:40%;");
        document.getElementById("committeeEventsText2").innerHTML = "Gemma Erickson and Hannah Wissner";
        document.getElementById("committeeEventsText3").innerHTML = "(Click to view members!)";
}