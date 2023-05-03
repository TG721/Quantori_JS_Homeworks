import { Component } from "../../base_classes.js";
import style from './Button.css';

export class Button extends Component {
    constructor(props) {  //{text, color, bgColor, width, class} 
        super(props);
        this.element = document.createElement('div');
        this.element.style.display = "inline-block"
        
    }
    update() {
        if(this.state.bgColor) this.element.style.backgroundColor = this.state.bgColor;
    }
    render(){
        if(this.props.color) this.element.style.color = this.props.color;
        if(this.props.bgColor) this.element.style.backgroundColor = this.props.bgColor;
        if(this.props.width) this.element.style.width = this.props.width;
        return super.render();
    }
}
