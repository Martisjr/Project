//var skaicius = 5; //number
//var tekstas = "žodis"; // string
//var bool = false; //boolean, bool

//var fahr = 26;
//var sentence = "Lietuvoje šiuo metu laipsnių pagal Celsijų";
//var FarToCel = ( fahr - 32 ) * 5/9 ;
//var complex = sentence.slice(0, 20) + FarToCel.toFixed(1) + " " + sentence.slice(20);
//
//console.log(complex);



//var formattedDate = date1.slice(0, 4) + "-" + date1.slice(4, 6) + "-" + date1.slice(6, 8);
// Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą, naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

//Būtinos sąlygos:
//- Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
//- Negalima rašyti jokio papildomo teksto (tarpai, raidės, žodžiai, išnaudokite turimą kintamąjį)
//- Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
//- Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
//- Rezultatą išvesti konsolėje

//Rezultatas:
//Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų

//********************************2 UŽDUOTIS*****************************************

//Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), 
//kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.
//
//
//Masyvas su objektais:

//var pcs = [
//	{ "modelis": "lenovo idėja", "kaina": 1234, "spalva": {"raudona": 1, "žalia": 2} },
//	{ "modelis": "hp monstras", "kaina": 800, "spalva": {"juoda": 2, "geltona": 0} },
//	{ "modelis": "toshiba sriuba", "kaina": 256, "spalva": {"mėlyna": 3, "žalia": 1} },
//	{ "modelis": "dell apskritimas", "kaina": 697, "spalva": {"juoda": 1, "balta": 2} },
//	{ "modelis": "acer peizažas", "kaina": 620, "spalva": {"juoda": 4, "balta": 2} },
//	{ "modelis": "apple 256", "kaina": 2560, "spalva": {"balta": 3, "juoda": 1} },
//	{ "modelis": "asus pokšt", "kaina": 1001, "spalva": {"juoda": 2, "geltona": 3} }
//],
//    pcsKeys = Object.keys(pcs);
//
//console.log("Galimi variantai:"  + "\n\n")
//
//for (var i=0; i < pcsKeys.length; i++) {
//  
//    
//    if(pcs[i].kaina*2 <= 1600){
//  
//
//        if((pcs[i].spalva.balta >= 2) && (pcs[i].spalva.juoda >= 2)) {
//                
//                    console.log("Modelis: " + pcs[i].modelis);
//                    console.log("Kaina: " + pcs[i].kaina*2);
//                    console.log("Spalvos: balta ir juoda" + "\n\n");}
//        
//        else if(pcs[i].spalva.juoda >= 2){
//        
//                console.log("Modelis: " + pcs[i].modelis);
//                console.log("Kaina: " + pcs[i].kaina*2);
//                console.log("Spalvos: balta" + "\n\n");}
//            
//        else if(pcs[i].spalva.balta >= 2) {
//                
//                console.log("Modelis: " + pcs[i].modelis);
//                console.log("Kaina: " + pcs[i].kaina*2);
//                console.log("Spalvos: juoda" + "\n\n");}
//    }
//    
//}

//Būtinos sąlygos:
//- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
//- Rezultatas išvedamas konsolėje,
//- Line break naudokite "\n",
//- Spalvų pavadinimai (balta, juoda) negali būti naudojami kaip naujas tekstas.
//Rezultatas turėtų atrodyti taip:
//Galimi variantai:
//
//Modelis: hp monstras
//Kaina: 1600
//Spalvos: juoda
//
//Modelis: dell 
//apskritimas
//Kaina: 1394
//Spalvos: balta
//
//Modelis: acer peizažas
//Kaina: 1240
//Spalvos: balta ir juoda

//********************************3 UŽDUOTIS*****************************************


////- Pasiimtų automobilio pasirinkimo ir įvesto dienų skaičiaus reikšmes,
////- Šias reikšmes sudaugintų ir pakeistų 0 € į atitinkamą skaitinę reikšmę realiu laiku (pasirinkus automobilį ir įvedus dienų skaičių nereikėtų spausti nieko papildomai, kad matytume galutinį rezultatą).
////
////Būtinos sąlygos:
////- Neredaguoti HTML ir CSS kodo,
////- Atsiųsti tik JS/jQuery kodo dalį,
////- Panaudoti turimas Javascript žinias ir optimizuoti pasikartojantį kodą,
////- Rezultatas turi keistis realiuoju laiku (iš karto kai pasirenkame automobilį arba įvedame dienų skaičių).
//
//$(document).ready(function(){
//    
//    $(".audi").change(function() {
//        $(".result span").text( ($(this).val()) * ($(".form-inner input").val()) );
//     
//    $(".form-inner input").keyup(function() {
//        $(".result span").text( ($(this).val()) * ($(".audi option:selected").val()) );
//
//});         
//});  
//});   
//// Optimizavimui variables neprireikė...
////        
////    var optVal = $(".audi option:selected").val();
////    var inpVal =  $(".form-inner input").val();
////    $(".result span").text(optVal * inpVal);
