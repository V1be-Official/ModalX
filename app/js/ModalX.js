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

function makeNeutral() {
    if( body.style.overflow == "hidden" )
        body.style.overflow = null;
    else
        body.style.overflow = "hidden";
}

class ModalX {
    constructor() {
        this.duration = 600;
        this.durationOut = 3000;
        this.text = "";
        this.className = "";
        this.type = "primary";
        this.button = false;
        this.buttonText = "OK";
    }
    alert(prop) {

        var text, duration, durationOut, className, type, button, buttonText;
        
        if(!prop) {
            text = this.text;
            duration = this.duration;
            className = this.className;
            duration = this.durationOut;
            type = this.type;
            button = this.button;
            buttonText = this.buttonText;
        } else {
            text = prop.text || this.text;
            duration = prop.duration || this.duration;
            className = prop.className || this.className;
            durationOut = prop.durationOut || this.durationOut;
            type = prop.type || this.type;
            button = prop.button || this.button;
            buttonText = prop.buttonText || this.buttonText;
        }

        if(button) {
            var mainButton = document.createElement("a");
            mainButton.className = "modalx-btn";
            mainButton.innerHTML = buttonText;
            type = "modalx-btn-"+type;
        }
            

        let mainFrame = document.createElement('div');
        mainFrame.className = "ModalX" + " " + type + " " + className;
        let mainText = document.createElement('span');
        mainText.className = "modalx-text";
        mainText.innerHTML = text;
        mainFrame.appendChild(mainText);
        if(mainButton) {
            mainButton.onclick = function() {
                elemOut(mainFrame, timerFade, duration)
            };
            mainFrame.appendChild(mainButton);   
        } else {
            mainFrame.onclick = function() {
                elemOut(mainFrame, timerFade, duration)
            };
        }        
        body.appendChild(mainFrame);
        var timerFade = setTimeout(function() {
            ModalXAnimations.fadeOut(mainFrame, duration);
            setTimeout(function() {
                body.removeChild(mainFrame)}, duration);
                console.log(1);    
        } , durationOut);

        ModalXAnimations.fadeIn(mainFrame, duration);

        function elemOut(element, timer, duration) {
            console.log(duration);
            ModalXAnimations.fadeOut(element, duration * 0.3);
            setTimeout(function() {
                body.removeChild(element)}, duration * 0.3);
                clearTimeout(timer);           
        }
    }
}
obj = {
    text: "Вы молодец",
    className: "center",
    duration: 600,
    durationOut: 3000,
    type: "primary",
    button: false,
    buttonText: "Отлично"
}
test = new ModalX();
test.alert(obj);

