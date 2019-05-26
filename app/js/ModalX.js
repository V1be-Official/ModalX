'use strict'

let body = document.body;

var ModalXAnimations = {

    fadeIn: function(element, duration = 500) {
        element.style.removeProperty('display');
        let display = window.getComputedStyle(element).display;

        if (display === 'none') 
            display = 'block';

        let opacity = getComputedStyle(element).opacity;
        element.style.display = display;
        element.style.transitionDuration = 0 + 'ms';
        element.style.opacity = 0;
        getComputedStyle(element).opacity;
        element.style.transitionDuration = duration + 'ms';
        element.style.transitionProperty = `opacity`;     
        element.style.opacity = opacity;
        setTimeout(function () {
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        } , duration)
    },
    fadeOut: function(element, duration = 500) {
        element.style.transitionProperty = `opacity`;
        element.style.transitionDuration = duration + 'ms';
        element.style.opacity = 0;
        window.setTimeout(function () {
            element.style.display = 'none';
            element.style.removeProperty('opacity');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration)
    },
    fadeToggle: function (element, duration = 500) {

        if (window.getComputedStyle(element).display === 'none') {

            return this.slideDown(element, duration);

        } else {

            return this.slideUp(element, duration);
        }
    }
}
function elementOut(element, duration) {
    ModalXAnimations.fadeOut(element, duration);
    removeTime(element, duration);                
}
function remove(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
}
function removeTime(element, time) {
    return setTimeout(function() {
        remove(element);
    }, time);
}
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}
function createElement(tag, className, text, id) {
    if(!tag)
        return false;
    if(!className)
        className = "";
    if(!text)
        text = "";
    if(!id)
        id = "";
    var element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    element.id = id;
    return element;
}
class ModalX {
    constructor() {
        this.titleText = "";
        this.duration = 600;
        this.durationOut = 3000;  
        this.text = "";
        this.className = "";
        this.type = "primary";
        this.button = false;
        this.buttonText = "OK";
    }
    alert(prop) {
        var text, duration, durationOut, className, type, button, buttonText, titleText;
        var fullClass;
        if(!prop) {
            titleText = this.titleText;
            text = this.text;
            duration = this.duration;
            className = this.className;
            duration = this.durationOut;
            type = this.type;
            button = this.button;
            buttonText = this.buttonText;
        } else {
            titleText = prop.titleText || this.titleText;
            text = prop.text || this.text;
            duration = prop.duration || this.duration;
            className = prop.className || this.className;
            durationOut = prop.durationOut || this.durationOut;
            type = prop.type || this.type;
            button = prop.button || this.button;
            buttonText = prop.buttonText || this.buttonText;
        }
        
        if(button) {
            var modalButton = createElement("a", "modalx-btn", buttonText);
            fullClass = `ModalX modalx-alert-btn modalx-alert-btn-${type}`;
        } else 
            fullClass = `ModalX modalx-alert modalx-alert-${type}`;
        var modalFrame = createElement('div', `${fullClass} ${className}`);
        if(titleText != "")
            var modalTitle = createElement('h6', "modalx-title", titleText);
        var modalText = createElement(`span`, "modalx-text", text);
        if(modalTitle)
            modalFrame.appendChild(modalTitle);
        modalFrame.appendChild(modalText);

        if(modalButton) {
            modalButton.onclick = function() {
                elementOut(modalFrame, duration);
                clearTimeout(timerFade);
                enableScrolling();
            };
            modalFrame.appendChild(modalButton);   
        } else {
            modalFrame.onclick = function() {
                elementOut(modalFrame, duration);
                clearTimeout(timerFade);
                enableScrolling();
            };
            var timerFade = setTimeout(function() {
                ModalXAnimations.fadeOut(modalFrame, duration);
                removeTime(modalFrame, duration);   
            } , durationOut);
        }        
        body.appendChild(modalFrame);
        ModalXAnimations.fadeIn(modalFrame, duration);
        disableScrolling();  
    }
}
var obj = {
    titleText: "Подтвердите действия!",
    text: "Добро пожаловать!",
    className: "center-x-top",
    duration: 400,
    durationOut: 3000,
    type: "error",
    button: true,
    buttonText: "Хорошо"
}
var test = new ModalX();

test.alert(obj);

