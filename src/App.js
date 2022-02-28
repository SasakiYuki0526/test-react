import React from 'react';
import './App.css';
import Counter from './components/Counter'; // 引用時要import進來

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App;
