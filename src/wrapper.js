import styled from "styled-components";
import React from "react";
import { Link } from 'react-router-dom'
export function CalcWrapper({ text, children, loading }) {
  let wrapper =
    <Calc>
      {children}
    </Calc>
  let loadingVis =
    <Calc>
      <NoDiv direction='column' just='center' align='center' height='100%'>
        Loading Level {text}
        <br />
        <br />
        <hr />
        <br />
        <svg width="160px" height="20px" viewBox="0 0 128 16" >
          <path fill="#949494" fillOpacity="0.42" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z" />
          <g>
            <path fill="#000000" fillOpacity="1" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z" />
            <animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1170ms" repeatCount="indefinite" />
          </g>
        </svg>
      </NoDiv>
    </Calc>
  return <>{loading ? loadingVis : wrapper}</>

}

export const Calc = styled.div`
    border: solid black 1px;
    height: 510px;
    width: 320px;
    display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  `
export const Screen = styled.div`
    border-radius: 10px;
    border: solid black 1px;
    height: 40%;
    width: 90%;
    display: flex;
  flex-direction: column;
  padding: 2.5%;
  align-items: center;
margin: 5% 2.5%;
`
export const ScreenRow = styled.div`
    display: flex;
    justify-content: ${props => props.just ? props.just : 'space-around'};
    align-items: ${props => props.align ? props.align : 'center'};
    height: ${props => props.height ? props.height : '10%'};
    width: ${props => props.width ? props.width : '100%'};
    margin: 2.5%;
`
export const ButtonPad = styled.div`
border-radius: 10px;
    border: solid black 1px;
    height: 60%;
    width: 90%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
margin: 2.5% 0;
`
export const ButtonRow = styled.div`
height: 30%;
width: 100%;
    display: flex;
  justify-content: center;
`
export const Button = styled.div`
border-radius: 10px;
    border: solid black 1px;
    height: 90%;
    width: 30%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
margin: 2.5%;
:hover{
    cursor: pointer;
}
`

export const AdSpace = styled.div`
border-radius: 10px;
    border: solid black 1px;
    height: 10%;
    width: 90%;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
margin: 2.5% 0;
`
export const NoDiv = styled.div`
 display: flex;
 flex-direction: ${props => props.direction ? props.direction : 'row'};
 justify-content: ${props => props.just ? props.just : 'flex-start'};
 align-items: ${props => props.align ? props.align : 'flex-start'};
 margin: ${props => props.margin ? props.margin : 0};
 padding: ${props => props.padding ? props.padding : 0};
 border: ${props => props.border ? props.border : 0};
 height: ${props => props.height ? props.height : 'auto'};
 width: ${props => props.width ? props.width : 'auto'};`

export const StyledLink = styled(Link)`
`;

export default {
  CalcWrapper,
  Screen,
  ButtonPad,
  AdSpace,
  Button,
  ButtonRow,
  ScreenRow,
  StyledLink
}