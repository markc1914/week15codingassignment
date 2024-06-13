import { useEffect, useState } from 'react';
import './App.css';
import VerticalTabs from './components/VerticalTabs';
import StyleService from './services/StyleService';

let service = new StyleService();

function App() {
    
    const [styles, setStyles] = useState([]);

    service.allStyles().then(results => {
      console.log(`service() returned ${results.length} styles`);
      setStyles(results);
    });
    
    console.log(`App() has ${styles.length} styles`)

  return (
    <div className="App">
      <VerticalTabs styles={styles}/>
    </div>
  );
}

export default App;
