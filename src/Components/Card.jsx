import React from "react";
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types';

function DisplayCard({ name, birthyear }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{birthyear}</Card.Text>
      </Card.Body>
    </Card>

  )
}

DisplayCard.propTypes = {
  name: PropTypes.string.isRequired,
  birthyear: PropTypes.string.isRequired,
}

export default DisplayCard