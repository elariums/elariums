import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function CardUse(props) {
    return (
        <div>
            <Card border={props.border} style={{ width: '18rem' }}>
                <Card.Header>{props.cardTitle}</Card.Header>
                <Card.Body>
                <Card.Text>
                    {props.cardText}
                </Card.Text>
                <Link to={props.linkUse} activeClassName="active"> <Button variant={props.btnVariant}  >Перейти к просмотру</Button>{' '} </Link>
                </Card.Body>
             </Card>
             <br></br>
        </div>
    )
}