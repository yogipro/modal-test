import { CardWrapper } from "./ModalCard.styled";
import React, { useEffect, useRef, useState } from "react";


const ModalCard = (props)=>{

    const [animate,setAnimate] = useState(false)
    const showRef = useRef(props.show)
    //only set animate to true when props.show changes 
    useEffect(()=>{
        if(showRef.current !== props.show ){
            setAnimate(true);
            console.log("toggle!")
        }
    },[props.show])


    return (

        <CardWrapper show={props.show} animate={animate} height={props.height} z={1000}>
            <button onClick={()=>{
                props.toggleShow(false);
            }}>X</button>
            <h2>Modal</h2>
            {props.children}
        </CardWrapper>
       
    )
}

export default ModalCard;