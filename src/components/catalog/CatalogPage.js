import { Container, Row, Col, Figure } from "react-bootstrap";
import CardUse from "../Card/CardUse";


export default function CatalogPage(props) {
    return (
        <>
        <div>
            <Container>
                <Row>
                    <Col>

                        <CardUse cardTitle="Гитары" border="dark" btnVariant="outline-dark" linkUse={"/guitar"} />
                        <CardUse cardTitle="Басс-гитары" border="dark" btnVariant="outline-dark" linkUse={"/homepage"}/>
                        <CardUse cardTitle="Барабаные установки" border="dark" btnVariant="outline-dark" linkUse={"/homepage"}/>
                        <CardUse cardTitle="Комбоусилители" border="dark" btnVariant="outline-dark" linkUse={"/homepage"}/>

                    </Col>

                    <Col sm={8}>
                    <Figure>
                        <Figure.Image
                            width={698}
                            height={600}
                            alt="171x180"
                            src="https://64.media.tumblr.com/146885a8ec1cb6d7079d94a2aa5035db/tumblr_nqci2lPkrj1utf9ulo1_r1_1280.gifv"
                        />
                    </Figure>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
} 