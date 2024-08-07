import React, {useContext} from "react";
import { SiteContext } from "../../contexts/siteContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import Avatar from "@mui/material/Avatar";
import { BaseTVProps } from "../../types/interfaces"; 

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  favouriteAvatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  mustWatchAvatar: {
    backgroundColor: "rgb(0, 200, 0)",
  },
};

interface TVCardProps  {
  tV: BaseTVProps;
  action: (m: BaseTVProps) => React.ReactNode;
}

const TVCard: React.FC<TVCardProps> = ({tV, action}) => {
  
  const { mustWatchTV } = useContext(SiteContext);
  const isMustWatchTV = mustWatchTV.find((id) => id === tV.id)? true : false;


  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={
          tV.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tV.poster_path}`
            : img
        }
      />
        <Grid container>
              <CardHeader
                avatar={
                  isMustWatchTV ? (
                  <Avatar sx={styles.mustWatchAvatar}>
                    <AddTaskIcon fontSize="small"/>
                  </Avatar>) : null }
              />
        </Grid>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tV.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tV.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(tV)}
        <Link to={``}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default TVCard;