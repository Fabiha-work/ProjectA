import React from 'react'
import Button from 'react-bootstrap/Button';
import Img7 from './mother.png'
import Img5 from './red.png'
import Img6 from './tech.png'
import  Img8 from './thali.png'
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

const Card1 = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Img5} height={200} width={200} alt="spi" /> 
        <Card.Body>
            <Card.Title>Tourism</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/tourism')}>Go to page</Button>
        </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Img6} height={200} width={200} alt="spi" /> 
        <Card.Body>
            <Card.Title>Technology</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/tech')}>Go to page</Button>
        </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Img7} height={200} width={200} alt="spi" /> 
        <Card.Body>
            <Card.Title>Movie</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/movie')}>Go to page</Button>
        </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Img8} height={200} width={200} alt="spi" /> 
        <Card.Body>
            <Card.Title>Food</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/food')}>Go to page</Button>
        </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Card1;
