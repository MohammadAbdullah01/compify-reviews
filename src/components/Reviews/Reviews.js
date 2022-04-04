import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review'

const Reviews = () => {

    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    return (
        <Container>
            <h1 className='text-center my-5'>Customer Reviews</h1>
            <Row>
                {reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)}
            </Row>
        </Container>

    );
};

export default Reviews;