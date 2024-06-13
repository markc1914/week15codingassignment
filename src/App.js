import { useState, useEffect } from 'react';
import './App.css';
import VerticalTabs from './components/VerticalTabs';
import RemoteStyleService from './services/RemoteStyleService';

let service = new RemoteStyleService();

function App() {

    const [styles, setStyles] = useState([]);

    useEffect(() => {
      reload();
    }, []);

    function reload() {
      service.allStyles().then(results => {
        console.log(`service() returned ${results.length} styles`);
        setStyles(results);
      });
    }

    function handleSubmitStyle(style, e) {
      console.log(`App.handleSubmitStyle(${style}, ${e})`);
      service.addStyle(style).then((success) =>{
        if(success){
          reload();
        }
      })
    }

    function handleDeleteStyle(id,e) {
      console.log(`App.handleDeleteStyle(${id}, ${e})`);
      service.removeStyle(id).then((success) =>{
        if(success){
          reload();
        }
      })
    }

    function handleEditStyle(style,e) {
      console.log(`App.handleEditStyle(${style.id}, ${e})`);
      service.editstyle(style).then((success) =>{
        if(success){
          reload();
        }
      })
    }

    console.log(`App() has ${styles.length} styles`)

  return (
    <div className="App">
      <VerticalTabs styles={styles} handleSubmitStyle={handleSubmitStyle}  handleDeleteStyle={handleDeleteStyle} handleEditStyle={handleEditStyle}/>
    </div>
  );
}

export default App;
