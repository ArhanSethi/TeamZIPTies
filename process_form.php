<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "arhansehi08@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $firstName $lastName\n\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message! We will get back to you as soon as possible.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>