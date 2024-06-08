const phonescrean=document.querySelector(".phonescrean");
const powerbutton=document.querySelector(".powerbutton");
const App=document.querySelector(".App");
const calculatoroutput=document.querySelector(".calculatoroutput");
const calculatorbutton=document.querySelector(".calculatorbutton");
const Calculatorinput=document.querySelector(".Calculatorinput");
const Topla=document.querySelector(".Topla");
const esittir=document.querySelector(".esittir");
const calculatorapp=document.querySelector(".calculatorapp");
 phonescrean.remove();



 const Power=()=>
 {
App.appendChild(phonescrean);
 }



phonescrean.remove();

     const Toplama =()=>
         {
         let islem=islem+Calculatorinput

          function sonucc ()
          {
                   calculatoroutput.innerHTML="Fonksiyon çalışıyor";
          }
         esittir.addEventListener("click", sonucc);
         }
Topla.addEventListener("click", Toplama);











powerbutton.addEventListener("click", Power);