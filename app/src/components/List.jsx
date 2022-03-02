import React from "react";
import Todo from "./Todo";


const List = ({ list, removeTodoListProp }) => {
    const renderedList = list.map((item) => 
            <Todo   title={item.title} 
                    completed={item.completed}
                    removeTodoItemProp={()=>removeTodoListProp(item.id)} 
                    key={"task"+item.title} />
            );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};


export default List;




