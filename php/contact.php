<?php
$name = $_POST["nombre"];
$email = $_POST["email"];
$phone = $_POST["telefono"];
$message = $_POST["consulta"];

// YOU ONLY NEED TO MODIFY THIS TWO VARIABLES
// WITH YOUR MAIL ACCOUNT AND CUSTOMIZE YOUR
// SUBJECT ONCE THE MAIL ARRIVES TO YOUR INBOX
$EmailTo = "hola@sebastiangaido.com";
$Subject = "Consulta desde TheCleaningCompany.com";


// prepare email body text
$Body .= "Nombre: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Telefono: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Consulta: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
	echo "success";
    //header("Location: " . $_SERVER['HTTP_REFERER']);  
}else{
    echo "invalid";
}
 
?>
