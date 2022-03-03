import React, { useState } from "react";
import Footer from "./components/header_footer/Footer";
import Form from "./components/Form/Form";
import ListGroup from "./components/Lists/ListGroup";
import Section from "./components/Section/Section";
import Header from "./components/header_footer/Header";
import './App.css'

const App = () => {
  const [groupList, setGroupList] = useState([]);
  const addTodo = (item) => {
    setGroupList((oldList) => [...oldList, item]);
  };
  const removeList = listId => {
    setGroupList(oldList=>oldList.filter(item=>item.id!==listId))
  };

  return <div className="ui container center aligned" id="Containerbody">

      <Header/>
      <Form addTodo={addTodo} key={'form_lists'}/>
      {groupList.map(item =><div key={'section_list_'+item.title}>
        <Section key={'title_list_'+item.title}  title={item.title}/>
        <ListGroup key={'list_'+item.title} title={item.title} onChange={()=>removeList(item.id)} id={item.id}/>
        </div>
      )
      }
      <Footer/>
      
  </div>;
}
export default App;


/* SETTODOLIST ( ( O L D L I S T ) = > O L D L I S T . F I
L T E R ( ( I T E M ) = > I T E M . I D ! = = I D ) ) ; */