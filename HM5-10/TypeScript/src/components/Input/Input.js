import { Component } from "../../base_classes.js";
import style from './Input.css';

export class Input extends Component {
    constructor(props) {  //{placeholder, width ...} 
        super(props);
        this.element = document.createElement('input');
        this.element.style.color = 'black';
        this.element.style.backgroundColor = '#F5F5F5';
        this.element.style.borderRadius = '10px';
        this.element.style.border = '1px solid #D2D2D2';
        this.element.style.paddingLeft = '10px';
        this.element.style.width = props.width || '100%';
        this.element.style.marginLeft = props.marginLeft || "0px";
    }
    render(){
        if(this.props.placeholder){
            this.element.placeholder = this.props.placeholder;
        }
        this.element.type = "text";
        return super.render();
    }
    update() {
        if(this.state.isEmpty) this.element.value = "";
    }
}
