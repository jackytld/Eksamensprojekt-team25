//Sigrun JS start
// En meget simpel DOM funktion/visning:
document.getElementById("demo").innerHTML =
"Om Kimmi Jørgensen:";

// 2 let-(kan variere) variabeler. Den viste tekst afhænger af hvilket variabel vi udskriver i vores DOM:
let Hilsen, hilsen;
hilsen = "Send mig ikke besked anmodninger, jeg svarer ikke";
Hilsen = "Kontakt mig endelig";
document.getElementById("hilsen").innerHTML = Hilsen;

// En var variabel, hvor X er svaret på den samlede ligning - var - for at vise den, i dag ville man bruge - let:
var x = 2 + 1 + 1;
document.getElementById("semester").innerHTML = x;

// En const-(fast variabel) med flere tilhørende variabler og objekter:
// Hvilke objekter der vises på browseren, afhænger af hvilke objekter vi tilknytter til vores variabel:
const person = {firstName:"Kimmi", hunde:"er søde", lastName:"Jørgensen", age:23, aber:"er endnu sødere", uddannelse:"Multimediedesigner"};
document.getElementById("hvemer").innerHTML = 
" Hej, jeg hedder " + person.firstName + " og jeg er " + person.age + " år gammel.";

// Her har vi 3 variabler, de har alle et navn, samt et objekt - det vi viser i browseren er disse 3 objekter, på hver sin linje:
let answer1 = "Jeg er PT i praktik i København.";
let answer2 = 'Skriv til mig hvis du har spørgsmål';
let answer3 = 'til multimediedesign.';

document.getElementById("teksten").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

// Den næste handling har 3 forklaringer:
// En fast variabel, med flere objekter, alle objekter vises i browsern i den skrevne rækkefølge:
const karakter = [02, 02, 4, 4, 7, 4, 7, 10, 10, 10, 12, 12, 10, 12];
document.getElementById("opgaver").innerHTML = karakter;  

// Vi har lavet en knap i vores html oneclik my funktion1(), som udfører denne funktion. Det som funktionen udfører for os:
// er at den sorterer vores tal i en alfabetisk rækkefølge:
function myFunction1() {
  karakter.sort();
  document.getElementById("opgaver").innerHTML = karakter;
}

// Vi har lavet en knap i vores html oneclik my funktion2(), som udfører denne funktion. Det som funktionen udfører for os:
// er at den sorterer vores tal i en nummereret rækkefølge:
function myFunction2() {
  karakter.sort(function(a, b){return a - b});
  document.getElementById("opgaver").innerHTML = karakter;
}

// Her har vi lavet en if-else funktion. Vores fast variabel er hour. vores varierende variabel er greetings.
// da det der vises på browseren variere i forhold til den, dog er tiden fast:
// Vi har altså sagt at IF kl er i mellem 10-18, så skal der stå: Goddag og velkommen til min profil:
// IF kl er i mellem 00-10, så skal der stå: God morgen <3:
// ELSE/ELLERs skal der stå: God aften og velkommen til min profil:

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Goddag og velkommen til min profill";
}

else if (hour < 10) {
    greeting = "God morgen <3"
}

else {
  greeting = "God aften og velkommen til min profi";
}

document.getElementById("hej").innerHTML = greeting;


// Denne kode beskrives som FOR loop, jeg vil gerne indrømme at jeg ikke forstår loops, for det første kan det skrives således, frem for at man skal skrive variablen gentagende gange:
// Derudover, er loops lavet sådan at det kører gentagende gange, så hurtigt at vi ikke kan se det. Jeg går ud fra at denne funktion har noget med direkte opdateringer på en side, så alt nyt kan ses med det samme?:
const cars = ["Venner", "Events", "Studie-grupper", "Arbejde", "Statister", "Test-personer"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("søger").innerHTML = text;

// Dette er endnu en loop, kaldet FOR IN loop:

const person1 = {fname:"Kimmi", lname:"Johnson", søger:"Søger:"}; 

let txt = "<b>";
for (let x in person1) {
  txt += person1[x] + " ";
}

document.getElementById("hvemsøger").innerHTML = txt;

// Alt herunder er vores galleri, til profilbilleder:

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//Sigrun JS slut