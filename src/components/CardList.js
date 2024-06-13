import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';

import StyleCard from './StyleCard';
export default function CardList(props) {

  let { styles, handleDeleteStyle } = props || [];
  console.log(`CardList() got ${styles.length} styles`)

  let styleElements = styles.map((style, index) => {

    return (
      <Grid key={style.id}>
        <StyleCard key={style.id} style={style} handleDeleteStyle={handleDeleteStyle} />
      </Grid>
    )
  });

  return (
    <Box component="section"  sx={{ flexGrow: 0}}>
      <Grid
        container spacing={5}>
        {styleElements}
      </Grid>
    </Box>


  )
}
