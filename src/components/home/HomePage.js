import {Container, Row, Col, Image, Jumbotron} from 'react-bootstrap'
import CardDeckUse from "../Card/CardDeckUse";
import Jumbo from '../JumboTron/Jumbo'

export default function HomePage(props){
    return(
        <div>
            <Container>
              <Row>
                 <Col md={{ span: 6, offset: 3 }}><Image src="https://data.whicdn.com/images/185654902/original.gif"/></Col>
               </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <CardDeckUse cardTitle1={'Lol'}
                         cardText1={'ffff'}
                         cardFooter1={'dddd'}
                         cardImg1={'https://img3.goodfon.com/wallpaper/nbig/8/64/stil-muzykalnyy-instrument.jpg'}

                         cardTitle2={'qq'}
                         cardText2={'ffff'}
                         cardFooter2={'dddd'}
                         cardImg2={'https://img3.goodfon.com/wallpaper/nbig/8/64/stil-muzykalnyy-instrument.jpg'}

                         cardTitle3={'Lol'}
                         cardText3={'ffff'}
                         cardFooter3={'dddd'}
                         cardImg3={'https://img3.goodfon.com/wallpaper/nbig/8/64/stil-muzykalnyy-instrument.jpg'}
                         />
                         <br></br>
                         <Jumbo jumboTitle={'Lol'} jumboText={'kdfnvkfdvnkfdvndfkjvndfkjvnfdkjvfkkdd'}/>
                    </Col>
                </Row>
            </Container>
          </div>     
    )
}