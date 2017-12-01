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