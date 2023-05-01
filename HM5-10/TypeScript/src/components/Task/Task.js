import { Component } from "../../base_classes.js";

export class Task extends Component {
    constructor(props) {   //{children}
        super(props);
        this.element = document.createElement('li');
        this.element.style.paddingTop = "10px";
        this.element.id = props.id;
    }
}