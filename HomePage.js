import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';

const places = [
  { id: 1, name: 'Paris', slug: 'paris', image: 'https://via.placeholder.com/400x250?text=Paris' },
  { id: 2, name: 'New York', slug: 'new-york', image: 'https://via.placeholder.com/400x250?text=New+York' },
  { id: 3, name: 'Tokyo', slug: 'tokyo', image: 'https://via.placeholder.com/400x250?text=Tokyo' },
  { id: 4, name: 'Rome', slug: 'rome', image: 'https://via.placeholder.com/400x250?text=Rome' },
  { id: 5, name: 'Sydney', slug: 'sydney', image: 'https://via.placeholder.com/400x250?text=Sydney' },
  { id: 6, name: 'Dubai', slug: 'dubai', image: 'https://via.placeholder.com/400x250?text=Dubai' },
  { id: 7, name: 'Barcelona', slug: 'barcelona', image: 'https://via.placeholder.com/400x250?text=Barcelona' },
  { id: 8, name: 'Istanbul', slug: 'istanbul', image: 'https://via.placeholder.com/400x250?text=Istanbul' },
  { id: 9, name: 'London', slug: 'london', image: 'https://via.placeholder.com/400x250?text=London' },
  { id: 10, name: 'San Francisco', slug: 'san-francisco', image: 'https://via.placeholder.com/400x250?text=San+Francisco' }
];

function HomePage() {
  const containerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const cardStyle = {
    border: 'none',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease'
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <Container style={containerStyle}>
      <h1 className="my-4" style={{ color: '#333' }}>Famous Tourist Places</h1>
      <ListGroup>
        {places.map(place => (
          <ListGroup.Item key={place.id} style={{ padding: '10px', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Link to={`/place/${place.slug}`} style={linkStyle}>
              <Card style={cardStyle} className="mb-3">
                <Card.Img variant="top" src={place.image} alt={place.name} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{place.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default HomePage;
