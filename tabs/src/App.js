import React, {useState} from 'react';
import './App.css';
import Tabs from './componenets/Tabs';

function App() {

  const tabList = [{label: "Tab1", content:"Tab1 content is showing here"}, 
                  {label: "Tab2", content:"Tab2 content is showing here"},
                  {label: "Tab3", content:"Tab3 content is showing here"}]

  const [tabItems, setTabItems] = useState(tabList);
  return (
    <div className="App">
      <Tabs tabItems={tabItems} setTabItems={setTabItems}/>
    </div>
  );
}

export default App;
