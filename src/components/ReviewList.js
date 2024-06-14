import * as React from 'react';
import Box from '@mui/material/Box';
import ReviewCard from './ReviewCard';

export default function ReviewList(props) {
  let {style} = props;

  let reviewElements = style.reviews.map((review, index) =>{
    return(
      <ReviewCard style={style} review={review} key={`#${index}`}/>
    );
  });

  return(
    <Box sx={{width:'30%', margin: 5}}>
      {reviewElements}
    </Box>
  )
}