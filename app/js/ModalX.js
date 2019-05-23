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
    constructor(properties = {
        name: false,
        func: false,
        width: 320,
        height: 180,
        timer: 100,
    }) {
        this.name = properties.name || false;
        this.func = properties.func || false;
        this.width = properties.width || 320;
        this.height = properties.height || 180;
        this.timer = properties.timer || 100;
        this.class = properties.class || "";
        this.id = properties.id || "";
        this.title = properties.title || "Подтвердите действия:";
        this.text = properties.text || "";
        this.buttonText = properties.buttonText || "OK";
    }
    alert(text = "Your message has been sent!", className="success", duration = 600, durationOut = 3000) {
        let mainFrame = document.createElement('div');
        mainFrame.className = "ModalX " + className;
        let mainText = document.createElement('span');
        mainText.className = "text";
        mainText.innerHTML = text;
        mainFrame.appendChild(mainText);
        mainFrame.onclick = function() {
            ModalXAnimations.fadeOut(mainFrame, duration * 0.3);
            setTimeout(function() {
                body.removeChild(mainFrame)}, duration * 0.3);
        }
        setTimeout(function() {
            if(!body.mainFrame)
                return false;
            ModalXAnimations.fadeOut(mainFrame, duration);
            setTimeout(function() {
                body.removeChild(mainFrame)}, duration);

        } , durationOut);

        body.appendChild(mainFrame);
        ModalXAnimations.fadeIn(mainFrame, duration);
    }
}


test = new ModalX();
test.alert();