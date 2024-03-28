import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'
import React from "react";

function App() {
  const baseURL = "http://localhost:3000/reviews/index/";

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Latest Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>{review.author}</strong> - {review.score}/5 - {review.submission_time}
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {/* <ul>
        reviews.map((review, index) => (
          <li key ={index}>
            <h2>{reviews.author</h2>
          </li>
        )) */}
      {/* </ul> */}
    </div>
  );
}

export default App;
