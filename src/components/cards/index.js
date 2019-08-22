import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'

function Cards() {
    return (
        <div className="container cards__wrapper">
            <Card className="card__item">
                <Card.Img src="https://picsum.photos/400/300?grayscale" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae. Nam orci lorem, iaculis eu commodo ut, pulvinar malesuada est. Donec et orci non mi gravida lacinia sed consectetur metus. Nullam volutpat tincidunt lorem vitae ultricies. Vestibulum feugiat et ex in vehicula. Nam pulvinar molestie libero, vel accumsan ligula bibendum eget. Nam vulputate mi erat, et blandit lorem facilisis vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://picsum.photos/400/300?grayscale" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit ametVestibulum feugiat et ex in vehicula. Nam pulvinar molestie libero, vel accumsan ligula bibendum eget. Nam vulputate mi erat, et blandit lorem facilisis vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://picsum.photos/400/300?grayscale" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet et blandit lorem facilisis vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Img src="https://picsum.photos/400/300?grayscale" />
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium tristique neque, fermentum viverra diam bibendum vitae. Nam orci lorem, iaculis eu commodo ut, pulvinar malesuada est. Donec et orci non mi gravida lacinia sed consectetur metus. Nullam volutpat tincidunt lorem vitae ultricies. Vestibulum feugiat et ex in vehicula. Nam pulvinar molestie libero, vel accumsan ligula bibendum eget. Nam vulputate mi erat, et blandit lorem facilisis vitae.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;