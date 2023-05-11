import './Button.css';

export default function Button(props){
    return (
        <div className={props.className}>
            {props.title}
        </div>
    )
}