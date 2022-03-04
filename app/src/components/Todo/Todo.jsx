import React, { useState } from "react";
import './Todo.css';

const Todo = ({ title, completed, removeTodoItemProp, updateTodoItemProp, erased }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [Value, setValue] = useState(title)
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);
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
    const handleButtonClickCompleted = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            updateTodoItemProp({ completed: newState });
            return newState;
        });
    };

    const handleButtonClickErased = () => {
        setErased((oldCompleted) => {
            const newState = !oldCompleted;
            updateTodoItemProp({ erased: newState });
            return newState;
        });
    };

    return (
        <div className="row" style={{display:(erasedState ? "none" : "flex")}}>
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
                            <h2 id="listName" className={"ui header" + (completedState ? " green" : "")}>{Value}</h2>
                        </div>
                        <div className="column one wide">
                            <button
                                className={"checkButton" + (completedState ? " blue" : " green")}
                                onClick={handleButtonClickCompleted}
                            >
                                <i className="white check icon"></i></button>
                        </div>
                        <div className="column two wide">
                            <button
                                onClick={handleButtonClickErased}
                                className="removeXButton"
                            >
                                <i className="white remove icon"></i>
                            </button>
                        </div>
                    </>
            }
        </div>
    );
};
export default Todo;



