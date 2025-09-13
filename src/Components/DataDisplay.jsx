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
    fetch(import.meta.env.VITE_BIO_URL) // Need to input API URL/IP address
    .then(response => response.json())
    .then(json => {
      setBiologists(json);
      setBioIsLoading(false);
    })
    fetch(import.meta.env.VITE_COMPSCI_URL) // Need to input API URL/IP address
    .then((response) => response.json())
    .then((json) => {
      setCompSci(json);
      setCompSciIsLoading(false);})
  }, []);

  console.log("BIO_URL:", import.meta.env.BIO_URL);
   
  if (bioIsLoading) {
    return (
    <div>
      <div>Loading...</div>
      <div>Backend is hosted on Render free tier and may need to spool up</div>
      <div>If data isn't loading; please refresh in a minute</div>
      <div> If you still don't see it,</div>
      <a target='https://sby-backend.onrender.com/bio/'>click here</a>
      <div>then when you see an HTTP 200 OK page, refresh this one</div>
    </div>)
  }
  if (compSciIsLoading) {
    return (
    <div>
      <div>Loading...</div>
      <div>Backend is hosted on Render free tier and may need to spool up</div>
      <div>If data isn't loading; please refresh in a minute</div>
      <div> If you still don't see it,</div>
      <a target='https://sby-backend.onrender.com/compsci/'>click here</a>
      <div>then when you see an HTTP 200 OK page, refresh this one</div>
    </div>)
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