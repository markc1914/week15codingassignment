import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stars from './Stars';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link';


export default function StyleCard(props) {
  let style = props.style;
  let handleDeleteStyle = props.handleDeleteStyle;
  console.log(`handleDeleteStyle is ${handleDeleteStyle}`);

  function onDelete(e){
    console.log(`StyleCard.onDelete() called with ${e.target}`);
    let element = e.target;
    console.log(element.dataset);
    let styleId = element.dataset.id;
    if(handleDeleteStyle){
      handleDeleteStyle(styleId,e);
    }
  }

  return (
    <Card sx={{ maxWidth: 600, minHeight: 800 }}>
      <CardMedia
        sx={{ minHeight: 600, maxHeight: 600 }}
        image={style.imageURL}
        title={style.name}
        component="img"
      />
      <CardContent sx={{ minHeight: 300}}>
        <Typography gutterBottom variant="h5" component="span">
          {style.name}
        </Typography><br/>
        <Typography gutterBottom variant="h6" component="span">
          Price: ${style.price}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Rating : <Stars style={style} numstars={style.stars}/><br/>
          {style.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          component="button"
          underline='none'>
            <a href={style.purchaseURL}>Buy Now!</a>
        </Link>
        <DeleteIcon onClick={onDelete} data-id={style.id}/>
        <Button size="small" onClick={onDelete} data-id={style.id}>Delete</Button>
      </CardActions>
    </Card>
  );
}
