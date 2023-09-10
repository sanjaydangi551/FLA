<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $recipient = $_POST["recipient"];
    $fullName = $_POST["full-name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $comments = $_POST["comments"];

    // Compose the email message
    $subject = "Contact Form Submission from $fullName";
    $message = "Full Name: $fullName\n";
    $message .= "Email: $email\n";
    $message .= "Phone Number: $phone\n";
    $message .= "Comments:\n$comments";

    // Set headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    $mailSent = mail($recipient, $subject, $message, $headers);

    if ($mailSent) {
        $response = array("success" => true);
    } else {
        $response = array("success" => false);
    }

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    header('HTTP/1.1 400 Bad Request');
}
?>
