// JavaScript Document

// Open and close menu
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Faqs section: vertical tabs

function openfaq (evt, faqItem) {
	
	var i, faqstab, tabcontent;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	
	for (i=0;i<tabcontent.length;i++) {
		tabcontent[i].style.display = "none";
	}
	
	faqstab = document.getElementsByClassName("faqstab");
	
	for (i=0;i<faqstab.length;i++) {
		faqstab[i].className = faqstab[i].className.replace(" active", "");
	}
	document.getElementById(faqItem).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Review slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("rvw");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}



// FAQs responsive tabs

var acc = document.getElementsByClassName("accordion");
var j;

for (j = 0; j < acc.length; j++) {
  acc[j].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}


// form validation

function reservation() {
	var nombre = document.getElementById('nombre');
	
	if (nombre.value == "") {
		alert("Ingrese su nombre");
		nombre.style.borderBottom = "yellow solid 2px";
		nombre.style.color = "yellow";
		return false;
	}
	
	var email = document.getElementById('email');
	
	if (email.value == "") {
		alert("ingrese su email");
		email.style.borderBottom = "yellow solid 2px";
		email.style.color = "yellow";
		return false;
	}
	
	var ciudad = document.getElementById('ciudad');
	
	if (ciudad.value == "") {
		alert("Ingrese su ciudad");
		ciudad.style.borderBottom = "yellow solid 2px";
		ciudad.style.color = "yellow";
		return false;
	}
	
	var servicio = document.getElementById("servicio");
	
	if (servicio.value == "choose") {
		alert("Seleccione un tipo de servicio");
		servicio.style.borderBottom = "yellow solid 2px";
		servicio.style.color = "yellow";
		return false;
	}
	
	var fecha = document.getElementById("fecha");
	
	if (fecha.value == "") {
		alert("Seleccione una fecha");
		fecha.style.borderBottom = "yellow solid 2px";
		fecha.style.color = "yellow";
		return false;
	}
	
	document.getElementById("thanks").style.display = "block"; // thanks message
	return true;
}

/* close menu when click items */

function closeItem () {
	document.getElementById("mySidenav").style.width = "0";
}

/* display about section */

function about() {
	var about = document.getElementById("about-section");
	
	document.getElementById("mySidenav").style.width = "0";
	about.style.display = "block";
	
	/* stop scrolling */
	
	$(document).ready(function () {
    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        console.log(ScrollTop);

        if (ScrollTop >= 0) {
			sct1.style.display = "none";
			sct2.style.display = "none";
			sct3.style.display = "none";
			sct4.style.display = "none";
			rvw.style.display = "none";
			fqs.style.display = "none";
			fqsr.style.display = "none";
			cont.style.display = "none";
			cntc.style.display = "none";
            //document.getElementById('back-to-top').fadeOut;
        }
    });
});
}


/* jQuery smooth scrollTo */

$("#toSct1").click(function() {
    var sct1 = document.getElementById("sct1");
    $('html,body').animate({
        scrollTop: $(sct1).offset().top},
        1000);
});

$("#toSct2").click(function() {
    var sct2 = document.getElementById("sct2");
    $('html,body').animate({
        scrollTop: $(sct2).offset().top},
        1000);
});

$("#toSct3").click(function() {
    var sct3 = document.getElementById("sct3");
    $('html,body').animate({
        scrollTop: $(sct3).offset().top},
        1000);
});

$("#toSct4").click(function() {
    var sct4 = document.getElementById("sct4");
    $('html,body').animate({
        scrollTop: $(sct4).offset().top},
        1000);
});




/*$(function()
 { $("#reservation").validate(
      {
        rules:
        {
          nombre:
          {
            required: true
          },
          email:
          {
            required: true,
            email: true
          }
        },
        messages: {nombre:{required: "Ingrese su nombre"},
          email:
          {
            required: "Please enter your email address."
          }
        }
      });
 }
);*/