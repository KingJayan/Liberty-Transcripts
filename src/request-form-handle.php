<html>

<p hidden>THIS FILE IS NOT IN USE</p>


<head>
  <link rel="stylesheet" href="./assets/stylesheets/form.css">
  <link rel="icon" type="image/x-icon" href="./assets/images/white-favicon.png">
  <title>Liberty Transcripts Audio Form</title>
  <link rel="stylesheet" href="./assets/stylesheets/w3.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@525&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body>
<div class="w3-bar" style="background: #E3F2FD;">
  <a href="/"><img src="./assets/images/fullLogo.png" style="width:20% height:20%"alt="Full Logo"></a>
<div style="margin-left: 45px; margin-top: .5%; margin-bottom: 1%;">
  <a href="/" style="width:20%;" class="curved-corner w3-bar-item w3-button w3-mobile">Home</a>
  <a href="/form" style="width:20%; margin-left:5px;" class="curved-corner w3-bar-item w3-button w3-mobile">Upload Audio</a>
  <a href="/bios" style="width:20%; margin-left:5px;" class="curved-corner w3-bar-item w3-button w3-mobile">Management Bios</a>
  <a href="/request-form" style="width:20%; margin-left:5px;" class="curved-corner w3-bar-item w3-button w3-mobile">Bankruptcy Transcript Request</a>
  </div>
</div>  
<section style="margin-top:115px;">  
<div>


<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize input
    function sanitize_input($data) {
        return htmlspecialchars(trim($data));
    }

    // Sanitize and retrieve form data
    $todays_date = sanitize_input($_POST['todays_date']);
    $first_name = sanitize_input($_POST['first_name']);
    $last_name = sanitize_input($_POST['last_name']);
    $firm_name = sanitize_input($_POST['firm_name']);
    $contact_phone = sanitize_input($_POST['contact_phone']);
    $alternate_phone = sanitize_input($_POST['alternate_phone']);
    $email = sanitize_input($_POST['email']);
    $street_address = sanitize_input($_POST['street_address']);
    $city = sanitize_input($_POST['city']);
    $state = sanitize_input($_POST['state']);
    $zip_code = sanitize_input($_POST['zip_code']);
    $case_name = sanitize_input($_POST['case_name']);
    $date_of_hearing = sanitize_input($_POST['date_of_hearing']);
    $judge_name = sanitize_input($_POST['judge_name']);
    $court_jurisdiction = sanitize_input($_POST['court_jurisdiction']);
    $matters_heard = sanitize_input($_POST['matters_heard']);
    $delivery_date_requested = isset($_POST['delivery_date']) ? sanitize_input($_POST['delivery_date']) : '';
    $other_comments = sanitize_input($_POST['other_comments']);

    // Prepare form submission data
    $form_data = "Today's Date: $todays_date\n";
    $form_data .= "First Name: $first_name\n";
    $form_data .= "Last Name: $last_name\n";
    $form_data .= "Firm Name: $firm_name\n";
    $form_data .= "Best Contact Phone #: $contact_phone\n";
    $form_data .= "Alternate Phone #: $alternate_phone\n";
    $form_data .= "Email: $email\n";
    $form_data .= "Street Address: $street_address\n";
    $form_data .= "City: $city\n";
    $form_data .= "State: $state\n";
    $form_data .= "ZIP Code: $zip_code\n";
    $form_data .= "Case Name and/or Caption: $case_name\n";
    $form_data .= "Date of hearing: $date_of_hearing\n";
    $form_data .= "Judge Name: $judge_name\n";
    $form_data .= "Court Jurisdiction: $court_jurisdiction\n";
    $form_data .= "Matter(s) heard: $matters_heard\n";
    $form_data .= "Delivery date requested: $delivery_date_requested\n";
    $form_data .= "Other relevant information/Extra comments: $other_comments\n";

    // Define file path
    $file_path = './data/form-submissions/' . uniqid() . '.txt';

    // Write form data to file
    if (file_put_contents($file_path, $form_data) !== false) {
        // Form submission successful
        echo "<h2>Form Submission Result</h2>";
        echo "<p>Your form submission has been saved successfully.</p>";
        echo "<p>You can download your form submission <a href='$file_path'>here</a>.</p>";
    } else {
        echo "<p>Error: Unable to save form submission.</p>";
    }
} else {
    // Display error if form submission method is not POST
    echo "<p>Error: Form submission method not supported.</p>";
}
?>



</div>
</section>
</body>
</html>
