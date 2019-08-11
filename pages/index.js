import React from 'react';
import Layout from '../components/Layout'
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Index = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardContent>
              A simple modal 
            </CardContent>
            <CardActions>
            <Link href="/modal">
              <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>


    </Layout>
  )
}

  ;

export default Index;