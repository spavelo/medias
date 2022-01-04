import React from 'react';
import styled from 'styled-components';

export const ProductContent = styled.div`
    width: 205px;
    height: 320px;
    padding: 10px;
    position: relative;
    background-image: url(${p => p.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200px;
    box-sizing: border-box;
    border: 1px solid rgba(210, 217, 217, 0.89);
        z-index: 223;
    &:hover: {
       opacity: 0.5; 
`
//
// export const Shadow = styled.div`
//     transition: .3s;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: #000;
//     width: 100%;
//     height: 100%;
//     z-index: 200;
//     opacity: 0;
//     &:hover {
//     opacity: 0.5;
//     }
// `

export const Title = styled.div`
     transition: all .4s;
     opacity: 0;
     height: 248px;
     overflow: hidden;
     font-size: 25px;    
     font-weight: bold;
     color: white;
     text-shadow: #000 1.5px 0 21px;
     text-align:center; 
     cursor: default;
     z-index: 330;
     &:hover {
        opacity: 1;
     }   
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-gap: 13px;
    z-index: 330;
`


// export const Img = styled.img`
//     position: absolute;
//     max-width: 100%;
// `