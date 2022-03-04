import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import List from "./List";
import ListErased from "./ListErased";
import './Lists.css';
import todos from "../../api";

const  ListGroup = (props) => {
    const {title}=props;
    const [todoList, setTodoList] = useState([]);
    const [modalState, setModal] = useState(false);
    
    const fetchList = async() =>{
      const {data} = await todos.get("/todos");
      setTodoList(data);
    };

    useEffect (() => {
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

    const handleButtonClickErased = () => {
      fetchList();
      setModal((oldCompleted) => {
          const newState = !oldCompleted;
          return newState;
      });
  };


    return (
      <>
    <div className="ui container center aligned">
        <Form addTodo={addTodo}  key={'list_form_'+title} titleList={title}/>
        <List 
          list={todoList}  
          key={title+'_list'} 
          updateTodoListProp={updateTodo}
          titleList={title}
        />
        <button
        onClick={handleButtonClickErased}
        className="deleteListButton"
        >Mostrar lista con tareas eliminadas</button>
    </div>
    <div className={"modalWindows" + (modalState ? " activeModal" : "")}>
      <ListErased
          removeTodoListProp={removeTodo} 
          list={todoList}  
          key={title+'_list_erased'} 
          updateTodoListProp={updateTodo}
          titleList={title}
          handleButtonClickErased={()=>handleButtonClickErased()}
        />
    </div>
    </>);
  }
  export default ListGroup;