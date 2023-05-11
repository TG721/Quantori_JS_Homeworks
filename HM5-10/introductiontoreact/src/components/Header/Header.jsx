export default function Header(props){
    const headerElement = props.importance; //h1 h2 h3 h4
        switch(headerElement){
            case "h1": {
                return <h1 className={props.className}>{props.title}</h1>
            }
            case "h2": {
                return <h2 className={props.className}>{props.title}</h2>
            }
            case "h3": {
                return <h3 className={props.className}>{props.title}</h3>
            }
            case "h4": {
                return <h4 className={props.className}>{props.title}</h4>
            }
            case "h5": {
                return <h5 className={props.className}>{props.title}</h5>
            }
            case "h6": {
                return <h6 className={props.className}>{props.title}</h6>
            }
            default: {
                return <h1 className={props.className}>{props.title}</h1>
            }
        }
}