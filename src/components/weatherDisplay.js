import { Card, Col, Row } from "react-bootstrap";

function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const { temp } = main;
  const { description, icon } = weatherDetails[0];

  return (
    <div className="today">
      <h2 className="mt-5">Today</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card bg="secondary" border="primary">
            <Card.Img
              variant="top"
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </Card.Text>
              <Card.Text>Temperature: {temp}°C</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default WeatherDisplay;
