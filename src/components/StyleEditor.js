import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import StyleEditForm from './StyleEditForm';
import Typography from '@mui/material/Typography';


export default function StyleEditor(props) {
  const [editform, setEditForm] = useState(<></>);
  let { styles, handleEditStyle } = props;
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
      selectedStyle = styles.filter(style =>{
        return style.id === selected;
      })[0];
    }
    if(selectedStyle){
      console.log(`Selected style is ${selectedStyle.id}`);
      setEditForm(<StyleEditForm styleToEdit={selectedStyle} idToEdit={selectedStyle.id} handleEditStyle={handleEditStyle}/>);
    } else {
      setEditForm(<></>);
    }
  }
  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{ minWidth: 120 }} mb={5} mt={5}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="style-selector" sx={{height:200, fontSize:'x-large'}} >
            <Typography gutterBottom variant="h5" mb={1} sx={{fontSize:'x-large'}}>Pick</Typography>
          </InputLabel>
          <NativeSelect sx={{fontSize: 'x-large', color : 'white'}}
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
      {editform}
    </Box>
  );
}
