import * as React from 'react';
import Box from '@mui/material/Box';
import StyleCard from './StyleCard';
export default function CardList(props) { 

  let {styles} = props || [];
  console.log (`CardList() got ${styles.length} styles`)

  let styleElements = styles.map((style,index) => {

    return (
      <StyleCard key={style.id} style={style}/>
    )
  });

  return (
    <Box
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      bgcolor={"background.dark"}
      sx={{ border: '2px solid grey' }}
    >
      {styleElements}
    </Box>)
}