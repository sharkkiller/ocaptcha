import React, {useState} from 'react';
import './App.css';
import {Dashboard} from "./components/Dashboard";
import Modal from "react-responsive-modal"

const App: React.FC = () => {

    const [open, setOpen] = useState(false);

    function onOpenModel() {
        setOpen(true);
    }

    function onCloseModal() {
        setOpen(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <table className="styleTable">
                  <tr>
                    <th>File Name</th>
                    <th>Download</th>
                  </tr>
                  <tr>
                    <td>Confidential.png</td>
                    <td><button onClick={onOpenModel} className="button">Download</button></td>
                  </tr>
                </table>
                <Modal onClose={onCloseModal} open={open}>
                    <div className="modalStyle>">
                        <Dashboard/>
                    </div>
                </Modal>
            </header>
        </div>
    );

}

export default App;
