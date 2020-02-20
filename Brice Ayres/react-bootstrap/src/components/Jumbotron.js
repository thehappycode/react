import React from 'react'
import styled from 'styled-components'
import background from './../assets/boat.jpg';
import {
    Jumbotron as Jumbo,
    Container
} from 'react-bootstrap'

const Styles = styled.div`
    .jumbo{
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: .6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0,
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>Learn to code from my Youtube videos</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}
export default  Jumbotron;