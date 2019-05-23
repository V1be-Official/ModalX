function makeNeutral() {
    document.body.style.overflow = "hidden";
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
    alert() {
        console.log(this);
    }
}

test = new ModalX({
    name: "Alert",
    func: "Success",
    width: 480,
    height: 130,
    timer: 0,
    class: "myClass",
    id: "myId",
    title: "Добро пожаловать!",
    text: "Hello, it's me!",
    buttonText: "Ok"
});
test.alert();
