import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
const Details = () => {
  let { id } = useParams();
  let specificMovie = Data.filter((el) => {
    return el.id === id;
  });

  return (
    <div>
      {specificMovie &&
        specificMovie.map((el) => {
          return (
            <div>
              <Card
                style={{
                  width: "900px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                border="primary"
              >
                <iframe
                  width="650"
                  height="400"
                  src={el.trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "30px",
                  }}
                ></iframe>
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                  <Button variant="outlined" startIcon={<HomeIcon />}>
                    <Link to={`/`} style={{ textDecoration: "none" }}>
                      Back Home
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
