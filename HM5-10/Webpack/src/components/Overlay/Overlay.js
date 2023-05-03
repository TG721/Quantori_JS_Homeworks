import { Component } from "../../base_classes.js";

export class Overlay extends Component {
    constructor(props){ 
        super(props);
        this.element.style.position = "fixed";
        this.element.style.top = "0";
        this.element.style.left = "0";
        this.element.style.width = "100%";
        this.element.style.height = "100%"
        this.element.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.element.style.backdropFilter = " blur(5px)";
        this.element.style.display = "none"
    }
    update() {
        if(this.state.display) this.element.style.display = this.state.display;
    }

}