
let libPrefix = "myLib";

function load(){

  HTTP.get( {

    url: "https://tronb-production.up.railway.app/",

    success: libPrefix + 'onLoading '

  } )

}

function onLoading(){

   Bot.sendMessage(content);

}

on('Hi', onLoading );
