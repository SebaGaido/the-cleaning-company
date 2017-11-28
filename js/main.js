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