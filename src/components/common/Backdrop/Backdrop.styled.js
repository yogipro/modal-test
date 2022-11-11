import Styled from "styled-components";
export const StyledBackdrop = Styled.div`

    position:fixed;
    width:100%;
    height:100%;
    background:black;
    display:${props=>props.display};
    opacity:.7;
    bottom:0;
    left:0;
    animation-name:${props=>props.show?"fade-in":"fade-out"};
    animation-duration:.3s;
    animation-fill-mode:forwards;
`;