import React, {useState} from "react";

const Tabs = (props) => {
    console.log(props);
    //use selected index to keep track which tab is selected
    const [selectedIndex, setSelectedIndex] = useState(1);
    return (
        <div>
            <div style={{display: "flex", marginTop:40, marginLeft: 500}}>
                {
                    props.tabsItems.map((tab, i)=> {
                        return (
                            <div key={i} onClick={(event) => {setSelectedIndex(i);}} style={{padding:20, marginRight:10, border: "1px solid grey"}}>{tab.label}</div>
                        );
                    })
                }
            </div>
            <div style={{width: 600, height: 300, marginLeft: 300, marginTop: 40, border: "1px solid grey"}}>
                <h2>{props.tabsItems[selectedIndex].content}</h2>
            </div>
        </div>    
    );    
};

export default Tabs;