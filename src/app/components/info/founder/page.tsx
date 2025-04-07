import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
import { FaBook } from 'react-icons/fa'

const Founder = () => {

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "This platform helped me streamline our workflow and boosted productivity!",
    },
    {
      name: "Mark Thompson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The UI is so clean and intuitive. I was able to get started quickly!",
    },
    {
      name: "Sophie Lee",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Love the attention to detail. Everything works perfectly!",
    }
  ];

  return (
    <>
      <Container fluid className="p-5 bg-light">
        <h2 className="mb-5">INTRODUCTION</h2>
        <Row className="d-flex align-items-center flex-column flex-md-row">
          {/* Left Image Box */}
          <Col xs={12} md={4} className="mb-4 mb-md-0 text-center">
            <div className="image-box">
              <img
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>

          {/* Right Introduction Box */}
          <Col xs={12} md={8}>
            <div className="intro-box p-4 bg-white rounded shadow">
              <h2>Hello, I'm John Doe</h2>
              <p>
                I'm a full-stack developer with a passion for creating elegant,
                scalable, and efficient web applications. I love working with
                React, Node.js, and modern web technologies.
              </p>
              <p>
                In my free time, I explore new tech, contribute to open source,
                and write blogs to share what I learn.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <h2 className="mb-5">EXPERTIES</h2>
        <Row className="g-4 justify-content-center">
          {testimonials.map((t, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front d-flex flex-column align-items-center justify-content-center p-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle mb-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <h5 className="mb-1">{t.name}</h5>
                    <small className="text-muted">{t.role}</small>
                  </div>
                  <div className="flip-card-back d-flex align-items-center justify-content-center p-3">
                    <p className="text-white text-center">"{t.quote}"</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
{/* 
      <div className="journey-section d-flex align-items-center">
        <Container>
          <div className="content-box text-white">
            <small className="text-uppercase text-muted">My Journey</small>
            <h1 className="mt-2 mb-4">A different approach, using a new method of education.</h1>
            <p>
              This is a short story of how I began this institute. What started with a small passion to teach
              has now evolved into a platform that nurtures dreams, skills, and confidence for students from all walks of life.
            </p>
          </div>
        </Container>
      </div> */}
    </>
  )
}

export default Founder