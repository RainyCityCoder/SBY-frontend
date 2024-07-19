import React, { useState, useEffect } from "react";
import DisplayCard from "./Card";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

function DataDisplay() {
  const [biologists, setBiologists] = useState([]);
  const [compSci, setCompSci] = useState([]);
  const [bioIsLoading, setBioIsLoading] = useState(true);
  const [compSciIsLoading, setCompSciIsLoading] = useState(true); 

  useEffect(() => {
    fetch(`http://[IP address here]:8000/bio/`) // Need to input API URL/IP address
    .then(response => response.json())
    .then(json => {
      setBiologists(json);
      setBioIsLoading(false);
    })
    fetch(`http://[IP address here]:8000/compsci/`) // Need to input API URL/IP address
    .then((response) => response.json())
    .then((json) => {
      setCompSci(json);
      setCompSciIsLoading(false);})
  }, []);
   
  if (bioIsLoading) {
    return <div>Loading...</div>
  }
  if (compSciIsLoading) {
    return <div>Loading...</div>
  }
  
  return (
    <Container>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Biologists</Accordion.Header>
          <Accordion.Body>
            <p>
              {biologists.map((el) => {
                return (
                  <DisplayCard
                  key={el.id}
                  name={el.name}
                  birthyear={el.birthyear}
                  />
                );})}
            </p>  
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Computer Scientists</Accordion.Header>
          <Accordion.Body>
            <div>
              {compSci.map((el) => {
                return (
                  <DisplayCard
                    key={el.id}
                    name={el.name}
                    birthyear={el.birthyear}
                  />
                );})}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default DataDisplay