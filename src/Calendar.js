import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Jumbotron} from "react-bootstrap";

function Calendar() {
    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling extra
                attention for the boys!
            </p>
            <p>
                <Button variant="outline-dark">Click for more</Button>
            </p>
        </Jumbotron>
)
    ;
}

export default Calendar;
