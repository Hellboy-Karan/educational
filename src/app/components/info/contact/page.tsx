import React from 'react'
import { Button, Card, Col, Container, Form, FormControl, FormLabel, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container fluid className="contact-section py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">We would love to hear from you! Please fill out the form below for any inquiries or questions.</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="contact-card p-4 mb-4">
              <h4 className="mb-3">Contact Information</h4>
              <p><strong>Address:</strong> 123 Education Street, Knowledge City, NY 12345</p>
              <p><strong>Email:</strong> contact@yourinstitute.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="contact-card p-4">
              <h4 className="mb-3">Send Us a Message</h4>
              <Form>
                {/* <Form.Group className="mb-3"> */}
                <div className='mb-3'>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl type="text" placeholder="Enter your full name" />
                  {/* </Form.Group> */}
                </div>
                {/* <Form.Group className="mb-3"> */}
                <div className='mb-3'>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl type="email" placeholder="Enter your email" />
                  {/* </Form.Group> */}
                </div>
                {/* <Form.Group className="mb-3"> */}
                <div className='mb-3'>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl type="text" placeholder="Enter your phone number" />
                  {/* </Form.Group> */}
                </div>
                {/* <Form.Group className="mb-3"> */}
                <div className='mb-3'>
                  <FormLabel>Message</FormLabel>
                  <FormControl as="textarea" rows={4} placeholder="Write your message here" />
                  {/* </Form.Group> */}
                </div>
                <Button variant="primary" type="submit" className="w-100">
                  Submit Inquiry
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact