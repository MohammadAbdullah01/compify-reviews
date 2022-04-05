import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css'
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <p style={{ color: "gray", marginBottom: "0" }}> <small>{ratings} out of 5</small></p>
                    <Rating style={{ marginBottom: "10px" }}
                        initialRating={ratings}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>

                    <p>{opinion}</p>
                </div>
            </div>
        </Col>
    );
};

export default Reviews;

