<?php
$name = $_POST["name"];
$email = $_POST["email"];
$topic = $_POST["topic"];
$message = $_POST["message"];

// YOU ONLY NEED TO MODIFY THIS TWO VARIABLES
// WITH YOUR MAIL ACCOUNT AND CUSTOMIZE YOUR
// SUBJECT ONCE THE MAIL ARRIVES TO YOUR INBOX
$EmailTo = "hola@sebastiangaido.com";
$Subject = "Seba! recibiste un mail de sebastiangaido.com";
 
// prepare email body text
$Body .= "Nombre: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Mensaje: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>