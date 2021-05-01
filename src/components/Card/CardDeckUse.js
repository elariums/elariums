import {Card, CardDeck} from 'react-bootstrap'

export default function CardDeckUse(props){
    return(
    <div>
    <CardDeck>
    <Card>
        <Card.Img variant="top" src={props.cardImg1} />
        <Card.Body>
        <Card.Title>{props.cardTitle1}</Card.Title>
        <Card.Text>
            {props.cardText1}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
            {props.textBtnModal1}
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src={props.cardImg2} />
        <Card.Body>
        <Card.Title>{props.cardTitle2}</Card.Title>
        <Card.Text>
            {props.cardText2}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        {props.textBtnModal2}
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src={props.cardImg3} />
        <Card.Body>
        <Card.Title>{props.cardTitle3}</Card.Title>
        <Card.Text>
            {props.cardText3}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        {props.textBtnModal3}
        </Card.Footer>
    </Card>
    </CardDeck>
    </div>
    )
}