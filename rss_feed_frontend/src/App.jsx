import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'
import React from "react";

function App() {
  const baseURL = "http://localhost:3000/reviews/index/";
  const refreshReviews = "http://localhost:3000/reviews/index/";


  const [reviews, setReviews] = useState([]);

  const updateReviews = () => {
    axios.get(refreshReviews)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  return (
    <div className="App">
      <h1>Latest Reviews</h1>
      <div className="button-container">
      <button onClick={updateReviews}>Update Reviews List</button>
      </div>
      <div className="card-container">
        {reviews.map((review, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <p>Username: {review.author}</p>
              <p>Score: {review.score}/5</p>
            </div>
            <div className="card-body">
              <p>{review.content}</p>
              <p>{formatDateTime(review.submission_time)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
