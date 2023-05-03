import { Component } from "../../base_classes.js";
import style from './List.css';

export class List extends Component {
    constructor(props) {   //{children}
        super(props);
        this.element = document.createElement('ul');
        this.element.style.listStyle = "none";
    }
    removeItemAt(index){
        this.props.children.splice(index,1);
    }
    
}