
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about-container' style={{ minHeight: "81vh" }}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>

                    </Col>
                    <Col className='my-5' sm={12} md={6}>
                        <h1>About Us</h1>
                        <p>MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model. This unprecedented combination of system performance, on-battery performance, and battery life sets MacBook Pro apart from every other notebook. MacBook Pro unleashes game-changing performance and the longest battery life ever on a Mac — allowing users to do more on the go than ever before.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;