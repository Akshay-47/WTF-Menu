import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onCourseChange } from "../store/Food";

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//     maxWidth: 280
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

// export default function OutlinedCard({ course }) {
//   const classes = useStyles();

//   return (
//     <Card

//       className={classes.card}
//       variant="outlined"
//     >
//       <Link to={`/tabs`}>
//         <CardContent>
//           <Typography
//             className={classes.title}
//             color="textPrimary"
//             gutterBottom
//           >
//             {course.name}
//           </Typography>
//         </CardContent>
//       </Link>
//     </Card>
//   );
// }

// import React from "react";

const OutlinedCard = ({ course }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(onCourseChange(course))}
      className="outlined-card"
    >
      <Link to="/tabs">
        <div className="card-content">{course.name}</div>
      </Link>
    </div>
  );
};
export default OutlinedCard;
