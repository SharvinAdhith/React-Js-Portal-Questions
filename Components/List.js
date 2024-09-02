import React from "react";
class List extends React.Component{
    constructor(){
        super();
        this.state={
            items : ['Apple','Banana','Cherry','Mango']
        };
    }
    render(){
        return(
            <div>
                <h1 style ={{fontSize:"50px",textAlign:"center"}}>The Items listed are :</h1>
            <ul>
                {this.state.items.map((item,index) => (
                    <li style ={{fontSize:"50px",textAlign:"center"}}key ={index}>{item}</li>
                ))}
            </ul>
            </div>
        );
    }
}
export default List;