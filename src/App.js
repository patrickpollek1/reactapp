import React  from 'react';
import Text from './Components/Text'
import ToDoList from './Components/ToDoList'
import './App.css';
import NewEntry from './Components/NewEntry';

class App extends React.Component {
 constructor(props) {
  super(props);
  this.state = {testentries: [{ id :1,titel:"Test1",text:"Test"},{ id :2,titel:"Test2",text:"Test"},{ id :3,titel:"Test3",text:"Test"}]};
}

  add(titel,id,text) {
   this.setState(state => (
     state.testentries.push({titel,text,id})))
   
 }
 
render() {
  return(
    <div>
<h1>TodoApp</h1>
<Text text="ToDo" color="red"></Text>  

<ToDoList entries={this.state.testentries}></ToDoList>
<Text text="Neu" color="black"></Text> 
<NewEntry add={this.add}></NewEntry>

</div>
  )
  
}
}

export default App;
