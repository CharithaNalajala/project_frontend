import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

const placeDetails = {
  paris: {
    name: 'Paris',
    guidelines: 'Visa required for entry.',
    planning: 'Best visited in spring or fall.',
    placesToCover: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Eiffel+Tower',
      'https://via.placeholder.com/300x200?text=Louvre+Museum',
      'https://via.placeholder.com/300x200?text=Notre-Dame+Cathedral'
    ]
  },
  'new-york': {
    name: 'New York',
    guidelines: 'No special requirements for tourists.',
    planning: 'Explore in summer for the best weather.',
    placesToCover: ['Statue of Liberty', 'Central Park', 'Times Square'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  tokyo: {
    name: 'Tokyo',
    guidelines: 'Ensure to have a valid passport.',
    planning: 'Cherry blossoms are beautiful in spring.',
    placesToCover: ['Tokyo Tower', 'Shibuya Crossing', 'Senso-ji Temple'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  rome: {
    name: 'Rome',
    guidelines: 'EU citizens can travel freely.',
    planning: 'Visit in spring or autumn for mild weather.',
    placesToCover: ['Colosseum', 'Vatican Museums', 'Pantheon'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  sydney: {
    name: 'Sydney',
    guidelines: 'Check travel advisories for visa details.',
    planning: 'Summer is ideal for beach activities.',
    placesToCover: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  dubai: {
    name: 'Dubai',
    guidelines: 'Visa on arrival for many nationalities.',
    planning: 'Best visited in winter to avoid extreme heat.',
    placesToCover: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  barcelona: {
    name: 'Barcelona',
    guidelines: 'Schengen visa required for many nationalities.',
    planning: 'Visit in spring or autumn to avoid peak season crowds.',
    placesToCover: ['Sagrada Familia', 'Park Güell', 'La Rambla'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  istanbul: {
    name: 'Istanbul',
    guidelines: 'E-Visa is available for many travelers.',
    planning: 'Spring and fall offer pleasant weather.',
    placesToCover: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  london: {
    name: 'London',
    guidelines: 'Check visa requirements for your nationality.',
    planning: 'Summer offers the most pleasant weather.',
    placesToCover: ['British Museum', 'Buckingham Palace', 'London Eye'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },
  'san-francisco': {
    name: 'San Francisco',
    guidelines: 'No special visa requirements for many tourists.',
    planning: 'Visit in late spring or early fall for mild weather.',
    placesToCover: ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman\'s Wharf'],
    relatedImages: [
      'https://via.placeholder.com/300x200?text=Statue+of+Liberty',
      'https://via.placeholder.com/300x200?text=Central+Park',
      'https://via.placeholder.com/300x200?text=Times+Square'
    ]
  },

  // Add more places similarly
};

function PlaceDetail() {
  const { slug } = useParams();
  const place = placeDetails[slug];

  if (!place) return <div className="text-center">Place not found!</div>;

  return (
    <Container className="my-4">
      <Card>
        <Card.Header as="h2">{place.name}</Card.Header>
        <Card.Body>
          <Card.Title>Guidelines</Card.Title>
          <Card.Text>{place.guidelines}</Card.Text>
          <Card.Title>Planning Tips</Card.Title>
          <Card.Text>{place.planning}</Card.Text>
          <Card.Title>Places to Cover</Card.Title>
          <ListGroup>
            {place.placesToCover.map((site, index) => (
              <ListGroup.Item key={index}>{site}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Title className="mt-4">Related Images</Card.Title>
          <Row>
            {place.relatedImages.map((image, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={image} alt={`Related to ${place.name}`} />
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PlaceDetail;
