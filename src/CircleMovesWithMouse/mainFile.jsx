import { useCallback, useState } from "react";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const circleRadius = 40;
const initialMousePos = {x: centerX, y: centerY};   

const MainFile =()=>{
    const [circlePos, setCirclePos]= useState(initialMousePos)
    // const handleMouseMove=(e)=>{
    //     const {clientX, clientY}= e;
    //     console.log("mouseposition:", clientX, clientY);
    //     setCirclePos({x: clientX, y: clientY});
    // } 
    // When handler is called setCirclePos is called which r-renders the component and this re-creates the handleMouseMove function.
    // To avoid this recreation of handler when re-render happens we use useCallback hook.
    // Now when mouse moves and handler is called and setCirclePos is triggered and re-render happens the handler is not recreated until dependency changes.
    // Here setCirclePos is stable and does not change. What get changed is circlePos. If we keep circlePos as dependency then on every re-render the handler will be recreated.
    const handleMouseMove=useCallback((e)=>{
        const {clientX, clientY}= e;
        console.log("mouseposition:", clientX, clientY);
        setCirclePos({x: clientX, y: clientY});
    },[setCirclePos])

    return(
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
                <circle
                    cx={circlePos.x}
                    cy={circlePos.y}
                    r={circleRadius}
                />
        </svg>
)}
export default MainFile;