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

  //imports backend methods that interact with the database
    //this method adds a new task
    const addTodo = async (item) => {
      const {data} = await todos.post("/todos", item) //saves it to the backend
      setTodoList((oldList) => [...oldList, data]); //render DOM's changes
    };
    //this method removes a task by ID
    const removeTodo = async (id) => {
      await todos.delete(`/todos/${id}`) 
      setTodoList((oldList)=>oldList.filter((item)=>item._id!==id)) 
    };
    //this method updates a task
    const updateTodo = async (id, item) => {
      await todos.put(`/todos/${id}`, item)
    };
    //shows and hides the modal whit erased tasks
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
          updateState={fetchList}
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
          updateState={fetchList}
          handleButtonClickErased={()=>handleButtonClickErased()}
        />
    </div>
    </>);
  }
  export default ListGroup;