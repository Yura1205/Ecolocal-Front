import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Medellin from '../assets/card3.jpg';
import '../styles/dashboard.css';

function Cards3() {
  return (
    <Card style={{ width: '18rem' }}>
      <img className="img_card"src = {Medellin} alt = "Card3" />
      <Card.Body>
        <Card.Title>MEDELLIN</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards3;
