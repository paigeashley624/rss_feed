// import { useState } from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'

function App() {


  const baseURL = "https://localhost:3000/reviews/fetch/";

  const [review, setReview] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setReview(response.data);
    });
  }, []);

  if (!review) return null;

  return (
    <>
      {/* <div>

      <h1>RSS Feed : *insert title of app here* </h1>
      </div> */}

      <div>
      <h1>{review.title}</h1>
      <p>{review.body}</p>
      </div>

    </>
  )
}

export default App
