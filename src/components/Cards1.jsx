import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from '../assets/Guatapé.jpg';
import '../styles/dashboard.css';

function Cards1() {
  
   return (
    <Card style={{ width: '18rem' }}>
      <img className="img_card"src = {Card1} alt = "Card1" />
      <Card.Body>
        <Card.Title>GUATAPÉ</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards1;
