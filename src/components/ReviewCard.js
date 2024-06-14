import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stars from './Stars';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ReviewCard(props) {
  let {style, review} = props;

  return (
    <Card sx={{ minWidth: 275, margin: 1}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Date: {review.reviewDate}
        </Typography>
        <Typography variant="h5" component="div">
          Review Summary: {review.summary}
        </Typography><br/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Stars style={style} numstars={review.stars}/>
        </Typography>
        <Typography variant="body2">
          {review.detailedReview}
        </Typography>
      </CardContent>
    </Card>
  );
}
