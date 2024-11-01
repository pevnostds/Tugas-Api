import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useAnimeList} from "../Api"
import '../asset/css/Anime.css';
import ClipLoader   from "react-spinners/ClipLoader"; 

export const AnimeList = () => {
  const { animeList,loading} = useAnimeList(); 
 if (loading) {
    return (
      <Container className="text-center mt-5">
        <ClipLoader size={100} color={"#ffff"} loading={loading} />
      </Container>
    );
  }
  return (
      <Container>
      <h3 className="mt-4 text-white">Anime List</h3>
      <Row>
        {animeList.map((item) => (
          <Col key={item.mal_id} md={4} className="mb-4 d-flex align-items-center column">
            <Card style={{ width: "100%"}} className="anime-card">
                <div className="anime-info">
                  <h5>{item.title}</h5>
                  <p>Score: {item.score}</p>
                  <p>Episodes: {item.episodes}</p>
                  <p>Status: {item.status}</p>
                  <Link to={`/anime/${item.mal_id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </div>
              <Card.Img variant="top" src={item.images.jpg.image_url} className="anime-image" style={{ 
                    height: "450px",
                    objectFit: "cover" ,
                  }}/>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
