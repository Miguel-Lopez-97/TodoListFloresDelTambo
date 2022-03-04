import React from "react";
import Todo from "../Todo/Todo";


const List = ({ list, updateTodoListProp, titleList }) => {
    const renderedList = list.map((item) => item.erased===true?null:item.category===titleList?
            <Todo   title={item.title} 
                    completed={item.completed}
                    updateTodoItemProp={(updatedTitle)=>updateTodoListProp(item._id, updatedTitle)} 
                    key={"task"+item._id} 
                    erased={item.erased}
            />:null
            );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};


export default List;




