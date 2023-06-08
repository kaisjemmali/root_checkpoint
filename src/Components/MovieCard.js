import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";

const MovieCard = ({ movieInfo }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          width="250"
          image={movieInfo.posterURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieInfo.description}
          </Typography>
          <br />
          <Rating name="read-only" value={movieInfo.rating} readOnly max={10} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
