import React from "react";
import TodoErased from "../Todo/TodoErased";


const ListErased = ({ list, removeTodoListProp, updateTodoListProp, titleList}) => {
    const renderedListCompleted = list.map((item) => item.erased?item.completed?item.category===titleList?
            <TodoErased   title={item.title} 
                    completed={item.completed}
                    removeTodoItemProp={()=>removeTodoListProp(item._id)} 
                    updateTodoItemProp={(updatedTitle)=>updateTodoListProp(item._id, updatedTitle)} 
                    key={"task_erased"+item._id} 
                    erased={item.erased}
            />
            :null
            :null
            :null
            ).filter(element => {
                return element !== null;
              });
    const renderedListUncompleted = list.map((item) => item.erased?item.completed?
            null:item.category===titleList?
            <TodoErased   title={item.title} 
                    completed={item.completed}
                    removeTodoItemProp={()=>removeTodoListProp(item._id)} 
                    updateTodoItemProp={(updatedTitle)=>updateTodoListProp(item._id, updatedTitle)} 
                    key={"task_erased"+item._id} 
                    erased={item.erased}
            />
            :null
            :null
            ).filter(element => {
                return element !== null;
              });
        console.log(renderedListCompleted, renderedListUncompleted)
    return (
        <div className="ui grid center aligned">
            <h1>Tareas Completadas Eliminadas</h1>
            {renderedListCompleted.length>0?renderedListCompleted:<p>No hay Tareas Eliminadas</p>}
            <h1>Tareas sin Completar Eliminadas</h1>
            {renderedListUncompleted.length>0?renderedListUncompleted:<p>No hay Tareas Eliminadas</p>}
        </div>
    );
};


export default ListErased;




