var htmlButton = document.getElementById("html-link");
var htmlHeader = document.getElementById("html-header")

var cssButton = document.getElementById("css-link");
var cssHeader = document.getElementById("css-header");

var basicHtml = document.getElementById("basic-html");
var htmlExtra = document.getElementById("html-extra");

var basicCss = document.getElementById("basic-css");
var flexbox = document.getElementById("flexbox");

var opened = "none";


htmlButton.addEventListener("click", showHtmlHeader);
cssButton.addEventListener("click", showCssHeader);

basicHtml.addEventListener("click", openDifferentPage);
htmlExtra.addEventListener("click", openDifferentPage);
basicCss.addEventListener("click", openDifferentPage);
flexbox.addEventListener("click", openDifferentPage);


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

function openDifferentPage(){
    if(this.attributes.id.value == basicHtml.attributes.id.value){
        window.open("htmlbasic.html", "_self");
    }else if(this.attributes.id.value == htmlExtra.attributes.id.value){
        window.open("htmlExtraSectionTags.html", "_self");
    }else if(this.attributes.id.value == basicCss.attributes.id.value){
        window.open("cssbasics.html", "_self");
    /*}else if(this.attributes.id.value == flexbox.attributes.id.value){
        window.open("htmlExtraSectionTags.html", "_self");*/
    }
}