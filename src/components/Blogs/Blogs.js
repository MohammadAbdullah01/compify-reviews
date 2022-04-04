import React, { useState } from 'react';
import './Blogs.css'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Outlet } from "react-router-dom";
import Answer1 from '../Answer1/Answer1';
import CustomLink from '../CustomLink/CustomLink';

const Blogs = () => {


    return (
        <Container style={{ minHeight: "80vh" }}>
            <div className='answer'>
                <h1>What is semantic tag?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur minima voluptate doloremque, natus cum iste sed tempora adipisci animi, inventore veritatis distinctio perspiciatis fuga, beatae ratione nesciunt quae laudantium vitae alias nam consectetur sequi quidem ex! Consectetur, maxime aliquam.</p>
            </div>
            <div className='answer'><h1>What is context API?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere quas reiciendis suscipit ducimus alias rerum facilis natus? Fugiat temporibus, similique aut enim qui id maxime voluptates magni facere pariatur ab earum rerum quidem non in animi, debitis nulla nisi reiciendis ipsam ipsum modi quia!</p>
            </div>
        </Container>
    );
};

export default Blogs;