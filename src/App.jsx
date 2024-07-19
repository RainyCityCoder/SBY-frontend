import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DataDisplay from './Components/DataDisplay';

function App() {

  return (
    <Container fluid>
      <Row>
        <h1>Scientist Birthyear</h1>
        <DataDisplay></DataDisplay>
      </Row>
      <Row>
        
      </Row>
    </Container>
  )
}

export default App
