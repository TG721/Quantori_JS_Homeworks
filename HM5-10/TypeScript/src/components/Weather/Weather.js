import { Component } from "../../base_classes.js";
import style from './Weather.css';
import SunnyWithCloud from './images/SunnyWithCloud.svg';

export class Weather extends Component {
    constructor(props) {  //{title, city ...} 
        super(props);
        const image = document.createElement('img');
        image.src = SunnyWithCloud;

        this.title = document.createElement('span');
        this.title.innerText = props.title;
        this.title.className = "bold";

        this.city = document.createElement('span');
        this.city.innerText = props.city;
        this.city.className = "city";

        this.element.appendChild(image);
        this.element.appendChild(this.title);
        this.element.appendChild(this.city);
    }
    setState(title, city) {
        this.title.innerText = title;
        this.city.innerText = city;
    }

}
