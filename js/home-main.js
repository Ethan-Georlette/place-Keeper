'use strict'

function initPage(){
    createUserPref();
    renderPage();
}
function renderPage(){
    var user=getUser();
    var elBody=document.querySelector('body');
    elBody.style.backgroundColor=user.BGColor
    elBody.style.color=user.color;
    if (user.dateOfBirth){
        var elAstrology=document.querySelector('.astrology-div')
        var strHtml=getForcastStrHtml();
        elAstrology.innerHTML=strHtml;
    }
    
}