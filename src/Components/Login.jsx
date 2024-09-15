import React from "react";
import { Box, Button, Container } from "@mui/material";
export const Logns=()=>{
    

    const inp1=()=>{
        
    }
    const submn=()=>{
        
    }
    const lgn=()=>{
        
    }
    return <>
    <Box sx={{maxWidth:200}}>
            <Box>
                <form>
                    <input type="mail" placeholder="Enter Your Email" onChange={inp1} name="in1"/>
                    <input type="password" placeholder="Enter Your password"onChange={inp1} name="in2"/>
                    <Button type="submit" style={{backgroundColor:"red",margin:"10px",color:"white"}} onClick={submn}>Login</Button>
                    <Button  style={{backgroundColor:"red",margin:"10px",color:"white"}} onClick={lgn}>Sign-in</Button>  
                </form>
            </Box>
    </Box> 
    </>
}