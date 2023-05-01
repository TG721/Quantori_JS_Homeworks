import { Component } from "../../base_classes.js";

export class Header extends Component {
    constructor(props) {  //{text, importance} // h1 h2 h3 h4 h5
        super(props);
        this.element = document.createElement(this.props.importance);
    }
}
