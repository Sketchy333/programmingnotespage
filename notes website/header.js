var htmlButton = document.getElementById("html-link");
var htmlHeader = document.getElementById("html-header")

var cssButton = document.getElementById("css-link");
var cssHeader = document.getElementById("css-header");

var htmlExtra = document.getElementById("");
var 

var opened = "none";


htmlButton.addEventListener("click", showHtmlHeader);
cssButton.addEventListener("click", showCssHeader);

function showHtmlHeader(){
    if(opened == "none"){
        htmlHeader.className = "show";
        opened = "html";
    }else if(opened == "css"){
        htmlHeader.className = "show";
        cssHeader.className = "hide";
        opened = "html";
    }else{
        htmlHeader.className = "hide";
        opened = "none";
    }
}

function showCssHeader(){
    if(opened == "none"){
        cssHeader.className = "show";
        opened = "css";
    }else if(opened == "html"){
        cssHeader.className = "show";
        htmlHeader.className = "hide";
        opened = "css";
    }else{
        cssHeader.className = "hide";
        opened = "none";
    }
}