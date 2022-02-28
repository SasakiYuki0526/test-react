import React,{useState} from 'react';
import './App.css';
import Counter from './components/Counter'; // 引用時要import進來

// hooks way 寫法
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} title="Counter App"/>
    </div>
  )
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