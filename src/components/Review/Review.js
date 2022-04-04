import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css'

const Reviews = ({ review }) => {
    const { name, picture, opinion, ratings } = review;
    return (
        <Col sm={12} md={6} lg={4}>


            <div className='review'>
                <div className='review-img'>
                    <img src={picture} alt="" />
                </div>
                <div className='review-description'>
                    <h3>{name}</h3>
                    <h4>{ratings}</h4>
                    <p>{opinion}</p>
                </div>
            </div>
        </Col>
    );
};

export default Reviews;

