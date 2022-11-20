function schimbareprofil()
{
NameToJob();
educationToAchievements();
oldToNew();
changebackround();

}
function NameToJob()
{
document.getElementById("Nume").innerHTML="inginer electronist Mercedes-Amg Petronas F1 Team"

}

function educationToAchievements()
{
	var r1=document.getElementById("real_1");
	var p1=document.getElementById("per_1");
	var l1=document.getElementById("link1");
	r1.innerHTML ="internship";
	p1.innerHTML ="01.09.2024 - 01.06.2026";
	link1.innerHTML ="https://group.mercedes-benz.com/careers/students/internship/";

	var r2=document.getElementById("real_2");
	var p2=document.getElementById("per_2");
	var l2=document.getElementById("link2");
	r2.innerHTML = "inginer f1";
	p2.innerHTML ="01.09.2027 -prezent";
	link2.innerHTML ="https://www.mercedesamgf1.com/en/";
	
	var r3=document.getElementById("real_3");
	var p3=document.getElementById("per_3");
	var l3=document.getElementById("link3");
	r3.innerHTML ="lucrare de masterat";
	p3.innerHTML ="01.09.2025 - 01.06.2026";
	link3.innerHTML ="";
	
}
function oldToNew()
{
	var img = document.getElementById("pozaprofil");
	img.src = "./sebastian.jpg";
	img.style.borderwith= '5px';
	img.style.borderstyle='solid';
	img.style.right='auto';

img.style.left='auto';
}

function changebackround()
{
	var bck= document.getElementById("body");
	bck.style.backgroundImage =  "url('george_backround.jpg')";

}

function AddNewItem() {
	// apelarea tutror functiilor
	addBirthDate();
	createEmailTextBox();
}

function addBirthDate() {
	var tag = document.createElement("h3"); //creeare elemntului h3
	tag.id = "date-years";//atribuirea unui id
	var text = document.createTextNode("27.01.2003"); //atribuirea unuitext initial
	var element = document.getElementById("birthdate"); //atribuirea variabilei emlement structura cu id "birthdate"
	tag.appendChild(text);// text este introdus in containarul tag
	element.appendChild(tag);//tag este introdus in containerul emlement 
	tag.style.color='white';//atribuirea culorii albe
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);//conditia modificarii cand moseoul este pe element
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);//conditia modificarii cand moseoul nu este pe element
}

function birthToYears() {
	var currentTime = new Date();//crearea nei variabile noi la care ii atribuim un element nou (data)
	var vv = document.getElementById("date-years"); //atribuirea elementului cu id "date-years " (tag)
	var year = currentTime.getFullYear()// variabila year ii va fi atribuit anul doar anul curent
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4)); //se face conversia de la tipu data la tipul numar iar prin functia vv.inerHTMl.slice(-4) se ia ca numar textul caruia i se taie primele 4 cifre
	vv.innerHTML = "Varsta: " + numYears; //se schimba din nou variabila "vv" care dupa operatie este din nou un element de tip text atribuit containerului ce cotine celelalte subdiviziuni
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '27.01.2003'; // cand mouseul este in afarara se restituie valoare de dupa egal

	}

function createEmailTextBox() {
	var input = document.createElement("input"); // creearea elementului de tip input
	input.type = "email";//declararea tipului
	input.id = "email-box";//declarare id
	input.value = "abc@xyz.com";//initializarea unei valori
	input.style.width = "300px";//setarea lungimii casetei
	input.addEventListener("mouseover", validateEmail);//creearea unui eveniment
	document.getElementById("birthdate").appendChild(input);//atribuirea lui input la addBirthDate
}

function validateEmail() {	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;//creearea conditiilor de validare
  	if (input.value.match(validRegex)) {   //verificarea conditiilor de validare 
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}

}