import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardList from './CardList';
import StyleForm from './StyleForm';
import StyleEditor from './StyleEditor';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const {styles, handleSubmitStyle, handleDeleteStyle, handleEditStyle} = props;

  console.log (`Vertical Tabs got ${styles.length} styles`);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.dark', display: 'flex', height: '100%', width: 1 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="secondary"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}
      >
        <Tab label="STYLES" {...a11yProps(0)}  />
        <Tab label="EDIT" {...a11yProps(1)} />
        <Tab label="SUBMIT NEW" {...a11yProps(2)} />
      </Tabs>
      <TabPanel sx={{width:1, height:1}} value={value} index={0}>
        <CardList styles={styles} handleDeleteStyle={handleDeleteStyle}/>
      </TabPanel>
      <TabPanel sx={{width:500}} value={value} index={1}>
        <StyleEditor styles={styles} handleEditStyle={handleEditStyle}/>
      </TabPanel>
      <TabPanel sx={{width:500}} value={value} index={2}>
        <StyleForm handleSubmitStyle={handleSubmitStyle}/>
      </TabPanel>
    </Box>
  );
}
