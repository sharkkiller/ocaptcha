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
                <button onClick={onOpenModel}>Open modal</button>
                <Modal onClose={onCloseModal} open={open}>
                    <Dashboard/>
                </Modal>
            </header>
        </div>
    );
}

export default App;
