import './App.css';
import Tabs from './componenets/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs tabsItems={[
        {label: "Tab1", content:"Tab1 content is showing here"},
        {label: "Tab2", content:"Tab2 content is showing here"},
        {label: "Tab3", content:"Tab3 content is showing here"}
      ]}/>
    </div>
  );
}

export default App;
