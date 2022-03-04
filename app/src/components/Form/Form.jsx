import { useState } from "react";
import React from "react";
import './Form.css';

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() ==="") return;
        addTodo({ title: inputValue, completed: false , id: inputValue});
        setInputValue("");
    }
    
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div id="formContainer" className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                    <input id="textBox" value={inputValue} onChange={handleInputChange} type="text"
                    placeholder="Ingrese su tarea"
                    />
                    </div>

                    <div className="column one wide">
                    <button type="submit" id="AddTaskButton" data-tooltip="Ingresa tu tarea" data-position="top left" data-inverted="">
                    <i className="white plus icon"></i></button>

                    </div>
                </div>
            </div>
        </form>
        );
}

export default Form;