import {Jumbotron,Button} from 'react-bootstrap'

export default function Jumbo(props){
    return(
    <div>
        <Jumbotron  >
            <h1>{props.jumboTitle}</h1>
            <p >  
                {props.jumboText}
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
     </div>
    )
}