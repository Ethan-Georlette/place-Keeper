'use strict'
const KEY = 'user-prefDB'
var gUser;

function setUserPref(name,BGColor, txtColor, dateOfBirth, TimeOfBirth) {
    var user = {name, BGColor, txtColor, dateOfBirth, TimeOfBirth }
    gUser = user;
    _saveUserToStorage();
}
function createUserPref() {
    var user = loadFromStorage(KEY)
    if (!user) {
        user = _createUser();
    }
    gUser = user;
    _saveUserToStorage();
}
function getUser(){
    return gUser
}
function getRandAstrological(){
    var forcasts=_createForcasts();
    return forcasts[getRandom(0,2)];

}
function getForcastStrHtml(){
    var strHtml=`
    <h4>Hello ${gUser.name}</h4>
    <h5>This is Your astrology forcast for today:</h5>
    <p>${getRandAstrological()}</p>`
    return strHtml;
}





function _createForcasts(){
    return ['The universe has been changing the terrain for you in recent days. Skies make it easy to embrace a sense of optimism and stillness, as the thoughtful Gemini moon aligns with faith-instilling Jupiter. This buoyant aspect makes it an ideal day to communicate goals and share plans in your community. Later.','It’s all too easy for you to get lost in your own mental busy state. Skies work to ground you down to foster a deeper self-awareness and respect for your health and body. Luna’s sweet link with dream-big Jupiter gives you an enviable charismatic boost.','The pieces are beginning to fall into place today. You just have to be willing to acknowledge the healing happening on the home front, as the thoughtful Gemini moon sweetly aligns with your ruler, visionary Jupiter. It’s easy to get blocked emotions off your chest today and make headway on long-standing issues. Later, Luna’s entrance brightens the mood and increases your craving for fun.']
}
function _createUser(){
    return {BGColor:'#ffffff',color:'#000000'}
}
function _saveUserToStorage() {
    saveToStorage(KEY, gUser)
}
