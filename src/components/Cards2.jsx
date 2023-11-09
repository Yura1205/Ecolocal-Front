import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Valle from '../assets/card2.jpg';
import '../styles/dashboard.css';

function Cards2() {
  return (
    <Card style={{ width: '18rem' }}>
      <img className="img_card"src = {Valle} alt = "Card2" />
      <Card.Body>
        <Card.Title>CIUDAD PERDIDA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards2;
