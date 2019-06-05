import * as React from "react";
import outerCircle from "../static/circle-outer.png";
import innerCircle from "../static/circle-inner.png";
import 'react-rotatable/dist/css/rotatable.min.css';
// @ts-ignore
import Rotatable from 'react-rotatable';
import './Dashboard.css';
import {Download} from "../components/Download";
import html2canvas from 'html2canvas';
// import axios from 'axios';
// import confidential from "../static/confidential.png";

// this is the css for the inner image in the modal
const styleInnerCircle = {
    position: "absolute" as "absolute",
    top: "24%",
    left: "27%",
    marginTop: "-5px"
};

// this is the css for the outer image in the modal
const styleOuterCircle = {
    border: "2px solid grey",
    borderRadius: "50%",
    width: "100%",
    maxWidth: "100%"
};

// this is the class for the modal
export const Dashboard: React.FC = () => {
    return (
        <div style={{position: "relative", display: "inline-block"}}>
            <div id="img_wheel">
            <Rotatable>
                <div style={styleOuterCircle} id="img_original">
                    <img src={outerCircle} alt="outer_circle" id="image1"/>
                </div>
            </Rotatable>
            <Rotatable>
                <div style={styleInnerCircle} className="innerCircle">
                    <img src={innerCircle} alt="inner_circle" id="image2"/>
                </div>
            </Rotatable>
            </div>
            <button onClick={matchImage} className="button" id="submit-btn">Submit</button>
            <div id="link"><Download/></div>
        </div>
    );

    // this is the function where the image matching is done
    function matchImage() {
        var t0 = performance.now();
        document.getElementById("link").style.visibility = "hidden";

        // these statements define the rotated images
        var a = new Image();
        var b = new Image();

        a.src = '../static/outerCircle.png';
        b.src = '../static/innerCircle.png';

        var x = document.getElementById('#img_wheel');

        // GrabzIt("Sign in to view your Application Key").ConvertPage({"target": "#divSection", "bheight": -1, "height": -1, "width": -1}).Create();

        // this library is used to capture the rotated images as one image
        html2canvas(document.querySelector("#img_wheel")).then(function(canvas_wheel) {

            html2canvas(document.querySelector("#img_original")).then(function(canvas) {

                // console.log(canvas.toDataURL());
                fetch('http://127.0.0.1:5000/compare_images', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json'
                    },
                    body: JSON.stringify(
                        [
                            canvas.toDataURL(),
                            canvas_wheel.toDataURL()
                        ]
                    )
                    }).then(response => response.json())
                    .then(response => {
                    
                    if(response >= 0.6) {
                        alert('Succesfully matched the images! Your file is ready to download below.');
                        document.getElementById("link").style.visibility = "visible";
                    } else {
                        alert('The Images do not match, please try again!');
                    }

                    });
                // document.body.appendChild(canvas_wheel);

                var t1 = performance.now();
                console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
                
            });
        });

    };

};
