"use client"

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TestmionalArr2 } from '@/app/types/common.type';

const TestimonialCard = ({ name, role, image, quote, description }: TestmionalArr2) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front d-flex card-horizontal overflow-hidden">
                        {/* Left Image Section */}
                        <div className="card-image-half">
                            <img
                                src={image}
                                alt={name}
                                className="img-fluid h-100 w-100 object-cover"
                            />
                        </div>

                        {/* Right Content Section */}
                        <div className="card-content-half d-flex flex-column justify-content-center p-4">
                            <h5 className="mb-2">{name}</h5>
                            <small className="text-muted">{role}</small>
                        </div>
                    </div>
                    <div className="flip-card-back d-flex flex-col align-items-center justify-content-center p-3">
                        <div>
                            <p className="text-white text-center">"{quote}"</p>
                            <Button variant="light" size="sm" onClick={handleShow}>
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{name}'s Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body className="testimonial-modal-body">{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TestimonialCard;
