import React,{useEffect,useState} from "react";


import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';

import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      loadData()
    },2000)
    
  }, [])
  
  const loadData = () => {
    fetch("http://localhost:4000/rest/?action=Omj&type=products")
      .then(response => {
        response.text()
          .then(_data => {
            var data = JSON.parse(_data);
            setList(data.list);
        })
    })
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Link to="/"> Home</Link>
          <Link to="/Contact">Contact</Link>

        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
      
    </div>
      </BrowserRouter>
  );
}

export default App;
