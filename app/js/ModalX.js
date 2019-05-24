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
    success(text = "Your message has been sent!", className="", duration = 600, durationOut = 3000) {
        let mainFrame = document.createElement('div');
        mainFrame.className = "ModalX success" + className;
        let mainText = document.createElement('span');
        mainText.className = "text";
        mainText.innerHTML = text;
        mainFrame.appendChild(mainText);
        mainFrame.onclick = function() {
            ModalXAnimations.fadeOut(mainFrame, duration * 0.3);
            setTimeout(function() {
                body.removeChild(mainFrame)}, duration * 0.3);
                clearTimeout(timerFade);
        }

        body.appendChild(mainFrame);
        let timerFade = setTimeout(function() {

            ModalXAnimations.fadeOut(mainFrame, duration);
            setTimeout(function() {body.removeChild(mainFrame)}, duration);
            
        } , durationOut);

        ModalXAnimations.fadeIn(mainFrame, duration);
    }
}

test = new ModalX();

setTimeout(function() {
    document.getElementById("ModalX").className += " active";
}, 1000);

