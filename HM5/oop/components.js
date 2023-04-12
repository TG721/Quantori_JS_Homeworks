class Header extends Component {
    constructor(props) {  //{text, importance} // h1 h2 h3 h4 h5
        super(props);
        this.element = document.createElement(this.props.importance);
    }
}

class Search extends Component {
    constructor(props) {  //{placeholder, style} 
        super(props);
        this.element = document.createElement('input');
    }
    render(){
        if(this.props.placeholder){
            this.element.placeholder = this.props.placeholder;
        }
        this.element.type = "text";
        return super.render();
    }
}

class Button extends Component {
    constructor(props) {  //{text, color, bgColor, width, class} 
        super(props);
        this.element = document.createElement('div');
    }
    render(){
        if(this.props.color) this.element.style.color = this.props.color;
        if(this.props.bgColor) this.element.style.backgroundColor = this.props.bgColor;
        if(this.props.width) this.element.style.width = this.props.width;
        return super.render();
    }
}

// class Task extends HTMLElement {
    class Task extends Component {
    constructor(props) {   //{children}
        super(props);
        this.element = document.createElement('div');
    }
}

customElements.define("task-item", Task);