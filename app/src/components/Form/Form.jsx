import { useState } from "react";
import React from "react";
import './Form.css';
import Todo from "../Todo/Todo";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
    setInputValue(e.target.value);
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() ==="") return;
        addTodo({ title: inputValue, completed: false, erased:false});
        setInputValue("");
    }
    
    return (
        <form className="ui centered card" onSubmit={handleFormSubmit}>
            <div id="formContainer" className="content" >
                <div className="">
                    <div className="left floated mini ui">
                    <input id="textBox" value={inputValue} onChange={handleInputChange} type="text"
                    placeholder="Ingrese su tarea"
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

export default Form;