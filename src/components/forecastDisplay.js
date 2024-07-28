import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function ForecastDisplay({ forecast }) {
  if (!forecast) return null;

  const forecastItems = forecast.list.slice(0, 5).map((item, index) => {
    const { dt_txt, main, weather } = item;
    return (
      <Col md={4} key={index} className="mb-5">
        <Card bg="info" border="secondary">
          <Card.Img
            variant="top"
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
          <Card.Body>
            <Card.Title>{new Date(dt_txt).toLocaleDateString()}</Card.Title>
            <Card.Text>{weather[0].description}</Card.Text>
            <Card.Text>Temp: {main.temp}°C</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <h2 className="mt-5">Next Few Days</h2>
      <Row className="justify-content-center">{forecastItems}</Row>
    </div>
  );
}

export default ForecastDisplay;
