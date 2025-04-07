import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TestimonialCard from './testimonialCard'

const Guider = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-5">YOUR'S TEACHERS</h2>
      <Row className="g-4 justify-content-center">
        <Col xs={12} sm={6} md={5} lg={4}>
          <TestimonialCard
            image="https://randomuser.me/api/portraits/men/35.jpg"
            name="Priya Sharma"
            role="Hindi"
            title="Student at EduSpark"
            quote="Amazing teaching methods!"
            description="Priya joined our institute after struggling with self-study. Through our mentorship program, she cracked her dream entrance exam with top scores. Her journey shows how consistent effort and proper guidance can change lives. Priya joined our institute after struggling with self-study. Through our mentorship program, she cracked her dream entrance exam with top scores. Her journey shows how consistent effort and proper guidance can change lives."
          />
        </Col>
        <Col xs={12} sm={6} md={5} lg={4}>
          <TestimonialCard
            image="https://randomuser.me/api/portraits/men/31.jpg"
            name="Rahul Mehta"
            role="Science"
            title="Working Professional"
            quote="Helped me switch careers!"
            description="Rahul was working in sales but wanted to move into tech. After completing our intensive bootcamp, he got a job as a software developer. His testimonial is proof that it's never too late to learn and grow."
          />
        </Col>
        <Col xs={12} sm={6} md={5} lg={4}>
          <TestimonialCard
            image="https://randomuser.me/api/portraits/men/67.jpg"
            name="Rahul Mehta"
            role="Science"
            title="Working Professional"
            quote="Helped me switch careers!"
            description="Rahul was working in sales but wanted to move into tech. After completing our intensive bootcamp, he got a job as a software developer. His testimonial is proof that it's never too late to learn and grow."
          />
        </Col>
        <Col xs={12} sm={6} md={5} lg={4}>
          <TestimonialCard
            image="https://randomuser.me/api/portraits/men/12.jpg"
            name="Rahul Mehta"
            role="Science"
            title="Working Professional"
            quote="Helped me switch careers!"
            description="Rahul was working in sales but wanted to move into tech. After completing our intensive bootcamp, he got a job as a software developer. His testimonial is proof that it's never too late to learn and grow."
          />
        </Col>
        <Col xs={12} sm={6} md={5} lg={4}>
          <TestimonialCard
            image="https://randomuser.me/api/portraits/men/35.jpg"
            name="Rahul Mehta"
            role="Science"
            title="Working Professional"
            quote="Helped me switch careers!"
            description="Rahul was working in sales but wanted to move into tech. After completing our intensive bootcamp, he got a job as a software developer. His testimonial is proof that it's never too late to learn and grow."
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Guider