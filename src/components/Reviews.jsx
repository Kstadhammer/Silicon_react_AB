import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <i key={index} className={`fa-star ${index < rating ? 'fa-solid' : 'fa-regular'}`}></i>
    ));
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="reviews-content">
          <h2 className="reviews-title">Clients are<br />Loving Our App</h2>
        </div>
        <div className="review-cards">
          {reviews.slice(0, 2).map((review) => (
            <div key={review.id} className="review-card">
              <img src="/src/assets/icons/quotes.svg" alt="Quote" className="quote-icon" />
              <div className="rating">
                {renderStars(review.starRating)}
              </div>
              <p className="review-text">{review.comment}</p>
              <div className="reviewer">
                <img src={review.avatarUrl} alt={review.author} />
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.author}</span>
                  <span className="reviewer-title">{review.jobRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
