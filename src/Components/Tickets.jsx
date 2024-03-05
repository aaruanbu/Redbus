import React, { useEffect, useState } from "react";
import {Box,Input} from "@mui/material"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { updates } from "./Slices";
import {useDispatch} from "react-redux"
export const Tckts=(ss)=>{
    const arys=useSelector((dat)=>(dat.datas.Ars))
    const ar=useSelector((dat)=>(dat.datas.dub))

    console.log(arys)
    const [bokng,setBokng]=useState(false)
        const dispatch=useDispatch()
    const [shotcks,setShotcks]=useState("")
    console.log(ar)
    // const [shotcks,setShotcks]=useState([])
    useEffect(()=>{
        open()
        if(shotcks==="truee"){
            setBokng(true)
        }
        else
        {
            // console.log("falses")
            setBokng(false)
        }
            // assv()
        // let sks = arys.map((v,i)=>{
        //     return ss.vlds===i?{...v,showsheats:false}:v
        //     })
        
        //     dispatch(updates(sks))
        // }
    },[])
    // let assv=()=>{
    //     let sks = arys.map((v,i)=>{
    //         return ss.vlds===i?{...v,showsheats:false}:v
    //         })
            // dispatch(updates(sks))
    // }
    // console.log(bokng)
    // console.log(shotcks)
    const open=()=>{
        arys.filter((bs,iu)=>{
            return ss.sh===bs.busid ? {...bs,seats:bs.seats.filter((st,io)=>{
                return  st.seatshow==true ? setShotcks("truee") :st
            })}:bs
        })
        // ass(ss.vlds)
        // let assv=()=>{
            //     let sks = arys.map((v,i)=>{
                //         return ss.vlds===i?{...v,showsheats:false}:v
                //         })
                //         dispatch(updates(sks))
                // }
                
            }
            // let ass=(ids)=>{
               // let dubary=ar.filter((bs,iu)=>{
                    // return ids===iu?  bs:""
                    // {...bs,seats:bs.seats.filter((st,io)=>{
                    //     return st.seatshow===true ? st :"" 
                    // })}:bs
                // })
                // dispatch(updates(dubary))
            // }
            //     const sttru=()=>{
            //         arys.map((valss,idss)=>{
            //         idss===ss.vlds ?{...valss,seats:valss.seats.every((seatval,id)=>{
            //             return seatval.seatshow==false ? console.log(seatval.seatshow) :""
            // })}:valss
            //     })  } 
    return(<>
    <Box>
    {bokng ? <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <Box >
        <h3>BOARDING POINT</h3>
        <Box  sx={{display:"flex",alignContent:"center",justifyContent:"space-between"}} >
            <input id="bdpnt" value="Boarding" style={{display:"inline-block"}} defaultChecked type="radio"/>
        <label htmlFor="bdpnt"> {arys.map((vals,ids)=>{
            return ss.sh===vals.busid ? <Box key={ids} sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                <h3 style={{padding:"5px 20px"}} >{vals.bustime}</h3>
                <h3>{vals.boarding}</h3>
            </Box>:""
        })}</label>
    </Box>
    </Box>
    </Box>
    :<>
                    <Box>   
                            <p>available</p>
                        <Box className="dumyseat1">
                            <p style={{padding:"5px 2px",border:"1px solid black",borderRadius:"3px"}}></p>
                            </Box>
                            <p>unavailable</p>
                    <Box className="dumyseat">
                        <p style={{padding:"5px 2px",border:"1px solid black",borderRadius:"3px"}}></p> </Box> 
                        </Box>
                    </>}
    </Box>


    <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
    </Alert>
    </>)
}