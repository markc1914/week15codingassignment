import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import StyleCard from './StyleCard';

export default function ReviewTab(props) {
  const [styleCard, setStyleCard] = useState('');
  const [reviewList, setReviewList] = useState([]);

  let { styles, handleSubmitReview } = props;
  let selected;

  let styleElements = styles.map((style, index) => {
    return (
      <option key={style.id} value={style.id}>{style.name}</option>
    );
  });

  function handleChange(e) {
    console.log(`StyleEditor.handleChange got ${e.target.value}`);
    selected = e.target.value;
    let selectedStyle;
    if (selected) {
      selectedStyle = styles.filter(style => {
        return style.id === selected;
      })[0];
    }
    if (selectedStyle) {
      console.log(`Selected style is ${selectedStyle.id}`);
      setStyleCard(<StyleCard style={selectedStyle} />);
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box mb={3} sx={{width:'25%'}}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="style-selector" sx={{ height: 200, fontSize: 'x-large' }} >
          </InputLabel>
          <NativeSelect sx={{ fontSize: 'x-large', color: 'white' }}
            defaultValue={''}
            inputProps={{
              name: 'Style to Edit',
              id: 'style-selctor',
            }}
            onChange={handleChange}
          >
            <option key="blah" value="">Please Select</option>
            {styleElements}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ width: '100&' }}>
        <Grid container spacing={5}>
          <Grid xs={8}>
            {styleCard}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

}