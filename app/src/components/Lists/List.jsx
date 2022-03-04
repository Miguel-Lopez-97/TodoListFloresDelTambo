import React from "react";
import Todo from "../Todo/Todo";


const List = ({ list, updateTodoListProp }) => {
    const renderedList = list.map((item) => item.erased===true?null:
            <Todo   title={item.title} 
                    completed={item.completed}
                    updateTodoItemProp={(updatedTitle)=>updateTodoListProp(item._id, updatedTitle)} 
                    key={"task"+item._id} 
                    erased={item.erased}
            />
            );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};


export default List;




