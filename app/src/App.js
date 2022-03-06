import React, { useState, useEffect } from "react";
import Footer from "./components/header_footer/Footer";
import FormCollection from "./components/Form/FormCollection";
import ListGroup from "./components/Lists/ListGroup";
import Section from "./components/Section/Section";
import Header from "./components/header_footer/Header";
import Instructions from "./components/Instructions/Instructions";
import todos from "./api"

import './App.css'

const App = () => {
  const [groupList, setGroupList] = useState([]);

  //fetchs the fake API from backend, filters the index to avoid duplicated lists
  const fetchList = async() =>{
    const dataApi = await todos.get("/todos");
    const lists = await dataApi.data.map(item=>item.category)
    const filteredList = await lists.filter((item, index) => lists.indexOf(item) === index)
    setGroupList(filteredList);
  };

  //initial fetch from backend
  useEffect (() => {
    fetchList();
  }, [])

  const addTodo = (item) => {
    setGroupList((oldList) => [...oldList, item]);
  };

  return (
  <>
  <div className="ui container center aligned" id="Containerbody">

      <Header/>
      <Instructions/>
      <FormCollection addTodo={addTodo} key={'form_lists'}/>
      {groupList.length>0?groupList.filter((item, index) => groupList.indexOf(item) === index).map(item => <div key={'section_list_'+item}>
        <Section key={'title_list_'+item}  title={item}/>
        <ListGroup key={'list_'+item} title={item} id={item.id} />
        </div>
      ):null
      }
      <Footer/>
      </div> 
    </>  
  )
}
export default App;
