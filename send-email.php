<?php
  $from_email = $_POST["email"];

  $headers = "Content-Type: text/html; charset=UTF-8";
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $success = mail($to, $subject, $message, $headers);

  if (!$success) {
    return $success;
  }

  header("Location: /");
  exit();
?>