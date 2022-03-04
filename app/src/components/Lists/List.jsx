import React from "react";
import Todo from "../Todo/Todo";


const List = ({ list, removeTodoListProp, updateTodoListProp }) => {
    const renderedList = list.map((item) => 
            <Todo   title={item.title} 
                    completed={item.completed}
                    removeTodoItemProp={()=>removeTodoListProp(item._id)} 
                    updateTodoItemProp={(updatedTitle)=>updateTodoListProp(item._id, updatedTitle)} 
                    key={"task"+item.title} 
            />
            );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};


export default List;




