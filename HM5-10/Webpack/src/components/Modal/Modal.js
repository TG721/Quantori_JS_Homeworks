import { Component } from "../../base_classes.js";

export class Modal extends Component {
    constructor(props) {   //{children}
        super(props);
        this.element.style.background = "white";
        this.element.style.position = "fixed";
        this.element.style.width = "524px";
        this.element.style.height = "371px";
        this.element.style.border = "1px solid #D2D2D2";
        this.element.style.top = "50%";
        this.element.style.left = "50%";
        this.element.style.transform = "translate(-50%, -50%)";
        this.element.style.display = "none";
    }
    update() {
        if(this.state.display) this.element.style.display = this.state.display;
    }
}
