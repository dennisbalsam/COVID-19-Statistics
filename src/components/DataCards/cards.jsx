import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from '../DataCards/cards.module.css';
import cx from 'classnames';
import CountUP from 'react-countup';

export default function cards({data: {confirmed, recovered, deaths, lastUpdate}}) {

    if(!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={5} justify="center" style={{marginBottom: '40px'}}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h4" style={{marginBottom: '20px'}}>
                            <CountUP start={0} end={confirmed.value} duration={1.0} separator="," />
                        </Typography>
                        <Typography variant="body1">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h4" style={{marginBottom: '20px'}}>
                            <CountUP start={0} end={recovered.value} duration={1.0} separator="," />
                        </Typography>
                        <Typography variant="body1">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant="h6"  color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h4" style={{marginBottom: '20px'}}>
                            <CountUP start={0} end={deaths.value} duration={1.0} separator="," />
                        </Typography>
                        <Typography variant="body1">
                            Number of deaths from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                
            </Grid>
            <div>
            <Grid item component={Card} xs={12} md={10} style={{margin: 'auto', textAlign: 'center'}}>
                    <CardContent>
                        <Typography variant="h5">
                            <div><span>Last Update:</span> {new Date(lastUpdate).toDateString()}</div>
                            {new Date(lastUpdate).toLocaleTimeString()}
                        </Typography>
                    </CardContent>
                </Grid>
            </div>
        </div>
    )
}
