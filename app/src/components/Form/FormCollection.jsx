import { useState } from "react";
import React from "react";
import './Form.css';

const FormCollection = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() ==="") return;
        let date = new Date().toLocaleDateString();
        addTodo(inputValue+"-"+date);
        setInputValue("");
    }
    
    return (
        <form className="ui centered card" onSubmit={handleFormSubmit}>
            <div id="formContainer" className="content" >
                <div className="">
                    <div className="left floated mini ui">
                    <input id="textBox" value={inputValue} onChange={handleInputChange} type="text"
                    placeholder="Ingrese Nueva Lista"
                    />
                    </div>

                    <div className="">
                    <button type="submit" id="AddTaskButton" data-tooltip="Ingresa tu tarea" data-position="top left" data-inverted="">
                    <i className="white plus icon"></i></button>

                    </div>
                </div>
            </div>
        </form>
        );
}

export default FormCollection;