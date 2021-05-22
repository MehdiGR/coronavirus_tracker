import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Checkbox,
} from "@material-ui/core";
import styles from "./Card.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = (props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = props;
  if (!confirmed) {
    return "loading...";
  }
  return (
    <div className={styles.continer}>
      <Grid container justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" color="textSecondary">
              <CountUp
                start={0}
                end={confirmed.value}
                separator=","
                duration={2.5}
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary">
              Number of active caises of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" color="textSecondary">
              <CountUp
                start={0}
                end={recovered.value}
                separator=","
                duration={2.5}
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary">
              Number of recovered from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" color="textSecondary">
              <CountUp
                start={0}
                end={deaths.value}
                separator=","
                duration={2.5}
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" color="textSecondary">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
