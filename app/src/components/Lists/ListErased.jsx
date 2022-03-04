import React from "react";
import TodoErased from "../Todo/TodoErased";


const ListErased = ({ list, removeTodoListProp, updateTodoListProp}) => {
    const renderedList = list.map((item) => 
            <TodoErased   title={item.title} 
                    completed={item.completed}
                    removeTodoItemProp={()=>removeTodoListProp(item._id)} 
                    updateTodoItemProp={(updatedTitle)=>updateTodoListProp(item._id, updatedTitle)} 
                    key={"task_erased"+item._id} 
                    erased={item.erased}
            />
            );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};


export default ListErased;




