import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Content2 from './components/Content2/Content2';
import Content3 from './components/Content3/Content3';
import Content4 from './components/Content4/Content4';
import Content5 from './components/Content5/Content5';
import Content6 from './components/Content6/Content6';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Content />
        <Content2 />
        <Content3 />
        <Content4 />
        <Content5 />
        <Content6 />
    </div>
  );
}
// https://randomuser.me/api/
export default App;