
function ParsePesel(id){
    const pls = document.getElementById(id).value;
  
    if (SetError(pls.length != 11))
        return;

    const p = new Array();
    for (i=0; i<11; i++){
        p[i] = parseInt(pls.substring(i, i+1));
        if(isNaN(p[i])){
            SetError(1);
            return;
        }
    }
    const miesiac = pls.substr(2, 2);
    const dzien = pls.substr(4, 2);
    const rok = pls.substr(0, 2)-1900*(-1);
    if(miesiac >= 21 && miesiac <= 32){
        rok = (-pls.substr(0,2) - 2000)*(-1);
        miesiac -= 21;
    }
    document.getElementById('pyear').value = rok;
    document.getElementById('pmonth').value = miesiac;
    document.getElementById('pday').value = dzien;
}
function SetError(c){
    document.getElementById("hasError").style.visibility=(c?"visible":"hidden");
    return c;
}
function myFunction(){

    const imie = document.getElementById('pname').value;
    const nazwisko = document.getElementById('psurname').value;
    const pls = document.getElementById('pesel').value;

    if (imie.length <= 20 && imie.length >= 3 && nazwisko.length <=30 && 
        nazwisko.length >=3 && pls.length ==11){
        alert("sukces")
    }
    else if(pls.length != 11){
        alert("Niepoprawny pesel")
    }
    else if(imie.length > 20 || imie.length < 5){
        alert("Niemożliwe imię")
    }
    else if(nazwisko.length > 30 || nazwisko.length < 3){
        alert("Niemożliwe nazwisko")
    }
    else
    {
        alert("Niemożliwe imię i nazwisko")
    }


}