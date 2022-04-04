import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import macbook from '../../macbook-pro.jpg'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const threeReviews = reviews.slice(0, 3);
    const navigate = useNavigate();
    return (
        <Container>
            <div className="banner-container">
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col sm={12} md={6}>
                        <div className='title'>
                            <h1>“A touch of genius”</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nobis ab hic eveniet aliquam sunt praesentium? Magni ducimus quis dicta maiores recusandae enim unde veniam quo? Libero fugiat modi delectus!</p>
                            <button>LIVE DEMO</button>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className='banner-img'>
                            <img className='img-fluid' src={macbook} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='customer-reviews'>
                <h1 className='text-center'>Customer Reviews(3)</h1>

                {/* use the above same style for review page  */}

                <Row className='g-2'>
                    {threeReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)}
                </Row>
                <button onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>

        </Container>
    );
};

export default Home;