class Component {
    constructor(props = {}) {
        //State is managed internally by a component and can be updated by the component itself.
        // State is an object that contains data that can change during the component's lifecycle. 
        //  When the state of a component changes, the component re-renders to reflect the new state.
        this.state = {}; 
        //properties(porps) are passed from a parent component to a child component as an object. 
        // They are immutable and read-only, meaning that the child component cannot change the props it receives from its parent.
        this.props = props;
        this.element = document.createElement('div');
    }
    setState(state) {
        this.state = {...this.state, ...state}; 
        this.update();
    }  

     
    render() {
        const div = this.element;
        if(this.props.class) this.element.className = this.props.class
        if(this.props.text){
            this.element.innerText = this.props.text;
        }
        if (this.props.style) {
            div.style = this.props.style;
        }
        // div.innerHTML = '';
        if (this.props.children) { // check if children is defined
            div.append(...this.props.children)
          }
        return div;
    }

    update() {
        this.render();
    }
}
