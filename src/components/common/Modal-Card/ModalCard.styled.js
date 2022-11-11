import Styled from "styled-components";
import { keyframes } from 'styled-components'


const slideUp =(height)=> keyframes`
    form{height:0}
    to{height:${height}};
`;
const slideDown = (height)=>keyframes`
    from{height:${height}}
    to{height:0}
  
`;


export const CardWrapper = Styled.div`
    height:0;
    bottom:0;
    position:fixed;
    left:0;
    background:white;
    border-radius:15px 15px 0 0 ;
    width:100%;
    border:1px solid black;
    z-index:${props=>props.z};
    animation-name: ${props=>{
        if (props.show && props.animate){
            return slideUp
        }else if (!props.show && props.animate){
            return slideDown
        }else{
            return ""
        }
    }};
    animation-duration: .3s;
    animation-fill-mode:forwards;

`;
export const ForDrop = Styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:${props=>props.show?"block":"none"};
    background:white;
    opacity:.7;
    bottom:0;
    left:0;

`;