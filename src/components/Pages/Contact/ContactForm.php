<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $phone_number = $_POST['phone'];
  $message = $_POST['message'];

  $email_from = "richard.trow.davis@gmail.com";

  $email_subject = "New Form Submission - Portfolio";

  $email_body = "User Name: $name\n".
                "User Email: $visitor_email\n".
                "User Phone Number: $phone_number\n".
                "User Message: $message\n";

  $to = "richard.trow.davis@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers = "Reply-To: $visitor_email \r\n";

  mail($to, $email_subject, $email_body, $headers);

 
?>