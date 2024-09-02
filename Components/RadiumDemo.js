import React from "react"
import Radium from 'radium'
function RadiumDemo()
{
    const style = {
        base:{
            color: 'blue',
            ':hover' :{
                    color: 'red'
            }
        }
    }
    return(
        <div>
            <h1 style={Styles.base}>Welcome</h1>
        </div>
    )
}
export default Radium(RadiumDemo);