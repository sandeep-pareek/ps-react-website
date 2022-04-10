import React from 'react';
import logo from '../resources/Sandeep-image.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (

    <div>
      <Container className="home-image">
        <br/>
        <div id="container">
          <div class="box" id="redbox">
            <h1> &nbsp; Software Engineer &nbsp;</h1>
            <h4>JAVA | SPRING | HIBERNATE | AWS | PYTHON | REACT </h4>
          </div>
          <div class="box" id="redbox">
            <p class = "linkedin">&nbsp; <a href="https://www.linkedin.com/in/sandeep-pareek">LinkedIn</a></p>
            &nbsp;<p class="github"><a href="https://github.com/sandeep-pareek">Github</a>&nbsp;</p>
          </div>
        </div>
      </Container >
    </div>
  )
}

export default Home;