import * as React from "react";
import './Download.css';
import confidential from "../static/confidential.png";

export const Download: React.FC = () => {
    return (
        <div className="downloadStyle">
            Your file is ready to download, <a href={confidential} download>click here</a> to download the file
        </div>
    );
};
