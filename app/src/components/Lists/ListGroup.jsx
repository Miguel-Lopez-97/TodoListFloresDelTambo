import React, { useState } from "react";
import Form from "../Form/Form";
import List from "../Lists/List";
import './Lists.css';

const  ListGroup = (props) => {
    const {title, onChange}=props;
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
        <button
        onClick={onChange}
        className="deleteListButton"
        >Eliminar lista</button>
    </div>;
  }
  export default ListGroup;