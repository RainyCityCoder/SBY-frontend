import React, { useState, useEffect } from "react";
import DisplayCard from "./Card";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function DataDisplay() {
  const [biologists, setBiologists] = useState([]);
  const [compSci, setCompSci] = useState([]);
  const [bioIsLoading, setBioIsLoading] = useState(true);
  const [compSciIsLoading, setCompSciIsLoading] = useState(true); 

  useEffect(() => {
    fetch(import.meta.env.VITE_BIO_URL)
      .then(res => res.json())
      .then(json => {
        setBiologists(json);
        setBioIsLoading(false);
      });
    fetch(import.meta.env.VITE_COMPSCI_URL)
      .then(res => res.json())
      .then(json => {
        setCompSci(json);
        setCompSciIsLoading(false);
      });
  }, []);

  if (bioIsLoading || compSciIsLoading) {
    return (
      <div>
        <div>Loading...</div>
        <div>Backend may need to spin up; please wait and refresh if data doesn't appear.</div>
        <div>
          If refreshing doesn't work, please 
          <a href="https://example.com">click here</a>, 
          wait until Render shows an HTTP 200 OK page, then refresh this page again.
        </div>
      </div>
    )
  }

  return (
    <Container className="groups-container">
      {/* Biologists */}
      <Card className="group-card">
        <Card.Header as="h2">Biologists</Card.Header>
        <Card.Body>
          <div className="cards-grid">
            {biologists.map(el => (
              <DisplayCard
                key={el.id}
                name={el.name}
                birthyear={el.birthyear}
              />
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* Computer Scientists */}
      <Card className="group-card">
        <Card.Header as="h2">Computer Scientists</Card.Header>
        <Card.Body>
          <div className="cards-grid">
            {compSci.map(el => (
              <DisplayCard
                key={el.id}
                name={el.name}
                birthyear={el.birthyear}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DataDisplay;
