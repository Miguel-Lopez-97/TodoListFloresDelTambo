import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const  ListGroup = (props) => {
    const {title}=props;
    const [todoList, setTodoList] = useState([]);
    const addTodo = (item) => {
      setTodoList((oldList) => [...oldList, item]);
    };
    const removeTodo = (id) => {
      setTodoList((oldList)=>oldList.filter((item)=>item.id!==id))
    };
    return <div className="ui container center aligned">
        <Form addTodo={addTodo}  key={'list_form_'+title}/>
        <List removeTodoListProp={removeTodo} list={todoList}  key={title+'_list'}/>
    </div>;
  }
  export default ListGroup;