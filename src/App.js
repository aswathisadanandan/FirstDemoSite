import React from 'react';
import MainPage from './Components/Index'
// import AddCategory from '../src/Components/'
// import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      history:"",
    }
  }
  render(){
  return (
    <div>
<MainPage/>
    </div>

  );
  }
}
//write component name
export default App;
