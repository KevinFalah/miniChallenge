import React from "react";
import {
  ListGroup,
  Card,
  Row,
  Col,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Data from "../dummy/Data.json";

function Home() {
  return (
    <Container className="bg-light" style={{ height: "100vh", width: "40%" }}>
      <Row className="justify-content-center">
        <Col className="col-md-6" style={{ width: "100%" }}>
          <ListGroup className="mt-2">
            {Data.map((data) => {
              return (
                <>
                  <Link to={`/${data.id}`} className="text-decoration-none">
                    <ListGroup.Item
                      className="d-flex mt-2 bg-dark text-light rounded-pill"
                      key={data.id}
                    >
                      <img
                        src={data.image}
                        width={80}
                        height={80}
                        className="rounded-circle me-3"
                        style={{objectFit: "cover", marginLeft:"-10px"}}
                      />
                      <div>
                        <h1 style={{ fontSize: "20px" }}>@{data.username}</h1>
                        <p className="text-muted">Follower {data.follower}</p>
                      </div>
                    </ListGroup.Item>
                  </Link>
                </>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
