<?php
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$ciudad = $_POST["ciudad"];
$telefono = $_POST["telefono"];
$servicio = $_POST["servicio"];
$fecha = $_POST["fecha"];

// YOU ONLY NEED TO MODIFY THIS TWO VARIABLES
// WITH YOUR MAIL ACCOUNT AND CUSTOMIZE YOUR
// SUBJECT ONCE THE MAIL ARRIVES TO YOUR INBOX
$EmailTo = "hola@sebastiangaido.com";
$Subject = "Consulta desde TheCleaningCompany.com";


// prepare email body text
$Body .= "Nombre: ";
$Body .= $nombre;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Ciudad: ";
$Body .= $ciudad;
$Body .= "\n";

$Body .= "Telefono: ";
$Body .= $telefono;
$Body .= "\n";

$Body .= "Servicio: ";
$Body .= $servicio;
$Body .= "\n";

$Body .= "Fecha: ";
$Body .= $fecha;
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
