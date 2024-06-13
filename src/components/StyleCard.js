import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stars from './Stars';

export default function StyleCard(props) {
  let style = props.style;
  console.log(props);


  return (
    <Card sx={{ maxWidth: 345, minHeight: 600 }}>
      <CardMedia
        sx={{ minHeight: 300 }}
        image={style.imageURL}
        title={style.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
          {style.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Rating : <Stars style={style}/>
          {style.description} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}