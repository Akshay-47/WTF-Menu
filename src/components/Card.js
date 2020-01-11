import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Icon from "@material-ui/core/Icon";
// import { TextField } from "@material-ui/core";
import CustomTextField from "./TextField";
import AddButton from "./Button";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const CardPoster = styled.div`
    width: 80%;
    margin: 1em auto 0 auto;
    border-radius: 20px;
    overflow: hidden;
  `;

  return (
    <Card className={classes.card}>
      <div
        style={{ transform: "rotate(0)" }}
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <CardPoster>
          <CardMedia
            className={classes.media}
            image={item.poster}
            title="Paella dish"
          />
        </CardPoster>
        <CardContent>
          <Typography variant="body2" color="textPrimary" variant="h5">
            {item.name}
          </Typography>
          <Icon className="fa fa-star" />
          <p>4.6</p>
          <h6>123 Ratings</h6>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <p>&#8377; 235</p>
        <AddButton />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CustomTextField />
        </CardContent>
      </Collapse>
    </Card>
  );
}
