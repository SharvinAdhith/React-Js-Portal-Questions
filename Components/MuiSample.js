//import React from 'react';
//import Button from '@mui/material/Button';
import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/icons-material/IconButton';
import SendIcon from '@mui/icons-material/Send';
//import Stack from '@mui/material/Stack';

function MuiSample()
{
    return(
        <div>
            <Button variant="contained" color="success" size="small">Contained</Button><br/><br/>
            <Button variant="outlined" color="error" size="medium" disabled>Outlined</Button><br/><br/>
            <Button variant="text" color="inherit" size="large">Text</Button><br/><br/>

            <Button variant="contained" color="warning"
                onClick={() => {
                        alert('clicked'); 
                    }} > Click me
            </Button> <br/><br/>
          
             <Button variant="contained" color="info" startIcon={<SendIcon />}>Send</Button> 
            <Button variant="contained" color='error' endIcon={<DeleteIcon />}>Delete</Button>  
            
            
        </div>
    )
}
export default MuiSample;