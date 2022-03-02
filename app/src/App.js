import React, { useState } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Section from "./components/Section";

const App = () => {
  const [groupList, setGroupList] = useState([]);
  const addTodo = (item) => {
    setGroupList((oldList) => [...oldList, item]);
  };

  return <div className="ui container center aligned">

      <Form addTodo={addTodo} key={'form_lists'}/>
      {groupList.map(item =><div key={'section_list_'+item.title}>
        <Section key={'title_list_'+item.title}  title={item.title}/>
        <ListGroup key={'list_'+item.title} title={item.title}/>
        </div>
      )
      }
      
  </div>;
}
export default App;
