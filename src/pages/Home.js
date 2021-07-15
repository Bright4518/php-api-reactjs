import React,{useEffect,useState} from "react";


function Home() {
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
    <div className="App">
      <ul>
        {
          list.map(item => (

            <li>{item} </li>

          ))
        }
      </ul>
    </div>
  );
}

export default Home;
