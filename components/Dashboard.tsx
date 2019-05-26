import * as React from "react";
import outerCircle from "../static/circle-outer.png";
import innerCircle from "../static/circle-inner.png";
import 'react-rotatable/dist/css/rotatable.min.css';
// @ts-ignore
import Rotatable from 'react-rotatable';

const styleInnerCircle = {
    position: "absolute" as "absolute",
    top: "27%",
    left: "27%",
};

const styleOuterCircle = {
    border: "2px solid grey",
    borderRadius: "50%",
    width: "100%",
    maxWidth: "100%"
};

export const Dashboard: React.FC = () => {
    return (
        <div style={{position: "relative", display: "inline-block"}}>
            <Rotatable>
                <div style={styleOuterCircle}>
                    <img src={outerCircle} alt="outer_circle"/>
                </div>
            </Rotatable>
            <Rotatable>
                <div style={styleInnerCircle}>
                    <img src={innerCircle} alt="inner_circle"/>
                </div>
            </Rotatable>
        </div>
    );
};