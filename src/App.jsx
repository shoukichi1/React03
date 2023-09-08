import React, { useRef, useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery";


function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    // API URL  
    const endpointURL =`https://pixabay.com/api/?key=39329045-d52c9927da2680e85cb318eb5&q=${ref.current.value}&image_type=photo`
    // APIを叩く
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };


  return (
  <div className="container">
    <h2>画像検索</h2>
    <form onSubmit={(e) => handleSubmit(e)}> 
        <input type="text" placeholder="画像を探す" ref={ref} />
        
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
};

export default App;


