import { Component } from "./base_classes.js";
export {Header, Input, Button, Task, List, Modal, Overlay}

class Header extends Component {
    constructor(props) {  //{text, importance} // h1 h2 h3 h4 h5
        super(props);
        this.element = document.createElement(this.props.importance);
    }
}

class Input extends Component {
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

class Button extends Component {
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
class Task extends Component {
    constructor(props) {   //{children}
        super(props);
        this.element = document.createElement('li');
        this.element.style.paddingTop = "10px";
        this.element.id = props.id;
    }
}

class List extends Component {
    constructor(props) {   //{children}
        super(props);
        this.element = document.createElement('ul');
        this.element.style.listStyle = "none";
    }
    removeItemAt(index){
        this.props.children.splice(index,1);
    }
    
}

class Modal extends Component {
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

class Overlay extends Component {
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