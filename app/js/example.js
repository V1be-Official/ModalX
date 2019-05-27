let option = document.querySelector(".main .option");
let optionItem = option.querySelector(".option-item");
let optionMenu = option.querySelector(".option-menu");
optionItem.setAttribute("data-name", "Alert");
optionItem.setAttribute("data-func", "Success");
option.addEventListener("click", function(elem) {
    let target = elem.target;
    if(target.classList.contains("option-item") || target.parentNode.classList.contains("option-item")) {
        toggleItem(optionMenu);
    }
    if(target.classList.contains("option-menu-item")) {
        optionItem.setAttribute("data-name", target.getAttribute("data-name"));
        optionItem.setAttribute("data-func", target.getAttribute("data-func"));
        optionItem.innerHTML = target.getAttribute("data-func") + "<i class='fas fa-sort-down'></i>";
        toggleItem(optionMenu);       
    }
});

function toggleItem(elem) {
    elem.classList.toggle("hidden");
}

var modal = new ModalX();

document.getElementById("modal-show-it").onclick = function() {
    let currentChoose = document.getElementById("main-option-item");
    let name = currentChoose.getAttribute("data-name");
    let style = currentChoose.getAttribute("data-func");
    var obj = {
        
    };
    switch(name) {
        case "alert":break;
        case "alert-btn":break;
        case "confirm":break;
        case "prompt":break;
    }
}
