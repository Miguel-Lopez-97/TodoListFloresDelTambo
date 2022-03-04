import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import List from "../Lists/List";
import './Lists.css';
import todos from "../../api";

const  ListGroup = (props) => {
    const {title, onChange}=props;
    const [todoList, setTodoList] = useState([]);
    
    useEffect (() => {
      async function fetchList(){
        const {data} = await todos.get("/todos");
        setTodoList(data);
      }
      fetchList();
    }, [])

    const addTodo = async (item) => {
      const {data} = await todos.post("/todos", item)
      setTodoList((oldList) => [...oldList, data]);
    };
    const removeTodo = async (id) => {
      await todos.delete(`/todos/${id}`)
      setTodoList((oldList)=>oldList.filter((item)=>item._id!==id))
    };

    const updateTodo = async (id, item) => {
      await todos.put(`/todos/${id}`, item)
    };

    return <div className="ui container center aligned">
        <Form addTodo={addTodo}  key={'list_form_'+title}/>
        <List 
          removeTodoListProp={removeTodo} 
          list={todoList}  
          key={title+'_list'} 
          updateTodoListProp={updateTodo}
        />
        <button
        onClick={removeTodo}
        className="deleteListButton"
        >Eliminar lista</button>
    </div>;
  }
  export default ListGroup;