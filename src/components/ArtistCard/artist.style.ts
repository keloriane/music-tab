


import styled from 'styled-components';
import {motion} from 'framer-motion';



export const ImageWrapper = styled(motion.div)`
    overflow:hidden;
    height:450px;
    width:140px;
    display:flex;
    justify-content:center;
    position:relative;
     animation: crescendo 3s alternate infinite ease-in;
     transform-origin:center center ;
    img{
        
        position: absolute;
        top:0;
 
         animation: none !important;
        transition: none !important;
        
    }

    @keyframes crescendo {
  0%   {height: 300px;}
  100% {height: 400px}
}
    @keyframes crescendoIMF {
  0%   {transform: scaleY(1);}
  100% {transform: scaleY(1);}
}

    
`;

export const ArtistCard = styled.div`
    position:relative;

`;


