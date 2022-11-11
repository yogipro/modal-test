import { StyledBackdrop } from "./Backdrop.styled";
import React, { useEffect, useRef, useState } from "react";
const Backdrop = (props)=>{
    const [display,setDisplay] = useState("none");
    const prevShowState = useRef(props.show);
    
    
    useEffect(()=>{
        if(prevShowState.current !== props.show){
            setDisplay("block");
        }
    },[props.show]);



    return (

        <StyledBackdrop show={props.show} display={display} onAnimationEnd={()=>{
            if(props.show){
                setDisplay("block");
            }else{
                setDisplay("none");
            }
        }}/>
    );
}
export default Backdrop;