import React from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Data from '../dummy/Data.json'
import {Container, Row, Col, Card} from 'react-bootstrap'

function Detail() {

    let navigate = useNavigate()

    const params = useParams()

    const detailData = Data[params.id - 1]
  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center py-5">
            <Card style={{ width: "18rem" }}>
              <div className="d-flex flex-column align-items-center py-3">
                <img src={detailData.image} width={100} className="rounded-circle" style={{objectFit:"cover"}} height={100}/>
                <h5 className="pt-2">@{detailData.username}</h5>
              </div>

              <div className="d-flex justify-content-evenly align-items-center">
                <div className="text-center">
                  <h5>{detailData.follower}</h5>
                  <p>Followers</p>
                </div>

                <div className="text-center">
                  <h5>{detailData.following}</h5>
                  <p>Following</p>
                </div>
              </div>

              <button className="btn fw-bold fs-5 text-center" onClick={() => navigate("/")}>🏇Back</button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
