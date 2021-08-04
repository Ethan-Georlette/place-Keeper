'use strict'

function setExample(txtColor,BGColor){
    var elDiv=document.querySelector('.example');
    elDiv.style.color=txtColor;
    elDiv.style.backgroundColor=BGColor;
}
function onSubmit(elForm){
    var name=elForm.name.value;
    var txtColor=elForm.txtColor.value;
    var BGColor=elForm.BGColor.value;
    var date=elForm.date.value;
    var time=elForm.time.value;
    setUserPref(name,BGColor,txtColor,date,time);  
}