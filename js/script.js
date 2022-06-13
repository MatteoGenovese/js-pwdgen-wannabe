//This script generates a new non-security password for users and displays it in the password generator div, in the html file

//definition of variables
const userName = prompt("nome");
const userSurname = prompt("cognome");
const userFavoriteColour = prompt("colore");

document.
    getElementById('password-generator').               //select the password-generator div
    innerHTML =                                         //inside this div..
    `La nuova password generata è:          
    ${userName}${userSurname}${userFavoriteColour}22`;  //write text and variables