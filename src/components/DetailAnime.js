import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useAnimeDetail } from "../Api";

export const DetailAnime = () => { 
  const { anime, error } = useAnimeDetail(); 

  if (error) return <p>Error loading anime details.</p>;
  if (!anime) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img
              variant="top"
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          </Card>
        </Col>
        
        <Col sm={8}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h3>{anime.title}</h3>
              </Card.Title>
              <br />
              <Card.Text style={{ textAlign:"justify" }}>
                <i>{anime.synopsis}</i>
              </Card.Text>

              <p><strong>Score:</strong> {anime.score}</p>
              <p><strong>Episodes:</strong> {anime.episodes}</p>
              <p><strong>Status:</strong> {anime.status}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
