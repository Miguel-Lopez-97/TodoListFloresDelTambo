import React, { useState } from "react";
import './Todo.css';

const TodoErased = ({ title, completed, removeTodoItemProp, updateTodoItemProp, erased }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [Value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title);
    const [erasedState, setErased] = useState(erased);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };
    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            updateTodoItemProp({title:tempValue});
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(Value);
            setIsEditing(false);
        }
    };
    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClickErased = () => {
        if (window.confirm("¿Desea retornar la tarea a la lista?")){
            setErased((oldCompleted) => {
                const newState = !oldCompleted;
                updateTodoItemProp({ erased: newState });
                return newState;
            });
        }
    };

    const handleButtonClickDelete = () => {
        if (window.confirm("¿Desea Eliminar la tarea de la base de datos para siempre?")) {
            removeTodoItemProp()
          }
    };

    return (
        <div className="divTodoErased" style={{display:(erasedState ? "flex" : "none")}}>
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus={true}
                                value={tempValue}
                            />
                        </div>
                    </div> :
                    <>
                        <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                            <h2 id="listName" className={"ui header" + (completed ? " green" : "")}>{Value}</h2>
                        </div>
                        <div className="divTodoErasedButtons">
                        <div className="column one wide">
                            <button
                                className={"checkButton" + (completed ? " blue" : " green")}
                                onClick={handleButtonClickErased}
                            >
                                <i className="white undo icon"></i></button>
                        </div>
                        <div className="column two wide">
                            <button
                                onClick={handleButtonClickDelete}
                                className="removeXButton"
                            >
                                <i className="trash white icon"></i>

                            </button>
                        </div>
                        </div>
                    </>
            }
        </div>
    );
};
export default TodoErased;



