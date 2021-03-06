import React,{useState} from 'react';
import './App.css';
import Form from './components/Form'
import Counter from './components/Counter'; // 引用時要import進來
import StyledElement from './components/StyledElement';

// hooks way 寫法
const App = () => {
  // const [count, setCount] = useState(0);

  // return (
  //   <div className="App">
  //     <Counter count={count} setCount={setCount} title="Counter App"/>
  //     {/* <StyledElement /> */}
  //   </div>
  // )
  const [formDone, setFormDone] = useState(false);

  return (
    <div className="App">
      <Form setFormDone={setFormDone}/>
      {formDone ? <p>表單填答完成</p> : <p>請填表單</p>}
    </div>
  );
}

export default App;

// class-based 寫法
// class App extends Component {
//   state ={
//     count:0
//   }
//   handleCountChange =() => {
//     this.setState({count:this.state.count+1})
//   }

//   render() {
//     return(
//       <div>
//         <div className="App">
//           <Counter count={this.state.count} setCount={this.state.handleCountChange}/>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;