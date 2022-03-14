import React, {useState} from "react";
import Styles from './Styles.module.css';

const Tabs = (props) => {
    //use selected index to keep track which tab is selected
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div>
            <div className={Styles.tabs}>
                {
                    props.tabItems.map((tab, i)=> {
                        const selectedTabStyles = {
                            padding:20, 
                            marginRight:10, 
                            border: "1px solid grey"
                        }
                        if (selectedIndex === i) {
                            selectedTabStyles.backgroundColor = "black";
                            selectedTabStyles.color = "white";
                        }
                        return (
                            <div key={i} onClick={(event) => {setSelectedIndex(i);}} style={selectedTabStyles}>{tab.label}</div>
                        );
                    })
                }
            </div>
            <div className={Styles.display}>
                <h2>{props.tabItems[selectedIndex].content}</h2>
            </div>
        </div>    
    );    
};

export default Tabs;