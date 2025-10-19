import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [submission, setSubmission] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dailyWord, setDailyWord] = useState('Zephyrian');
  const [topAnswers, setTopAnswers] = useState([
    {
      id: 1,
      text: "A mystical wind that carries whispers of forgotten dreams across ancient valleys.",
      author: "Anonymous"
    },
    {
      id: 2,
      text: "The gentle breeze that makes flowers dance in perfect harmony with nature's rhythm.",
      author: "Anonymous"
    },
    {
      id: 3,
      text: "A rare phenomenon where the wind itself becomes visible, shimmering like liquid silver.",
      author: "Anonymous"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submission.trim()) {
      // In a real app, this would send to your backend
      console.log('Submission:', submission);
      setIsSubmitted(true);
      setSubmission('');
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>WordCraft Daily</h2>
          </div>
          <div className="nav-menu">
            <Link to="/admin" className="nav-link admin-link">
              Admin
            </Link>
          </div>
        </div>
      </nav>
    {/* Google Ad Placeholder */}
       <section className="ad-section-full">
        <div className="container">
          <div className="ad-placeholder">
            <div className="ad-label">Advertisement</div>
            <div className="ad-content">
              <p>Google AdSense Ad Space</p>
              <small>728x90 Leaderboard</small>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="hero-background"></div>
        
        <div className="hero-container">
          <h1 className="hero-word">{dailyWord}</h1>
        </div>
      </section>

      {/* Combined Section - Submission and Ad Side by Side */}
      <section className="combined-section">
        <div className="container">
          <div className="sections-wrapper">
            {/* Submission Section */}
            <div className="submission-section">
              <div className="submission-card">
                <h2>Share Your Interpretation</h2>
                <p>What does "<strong>{dailyWord}</strong>" mean to you? Be creative, be unique, be you!</p>
                
                <form onSubmit={handleSubmit} className="submission-form">
                  <div className="form-group">
                    <textarea
                      value={submission}
                      onChange={(e) => setSubmission(e.target.value)}
                      placeholder="Write your creative interpretation here..."
                      maxLength={500}
                      required
                    />
                    <div className="char-count">{submission.length}/500</div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={!submission.trim()}
                  >
                    {isSubmitted ? (
                      <>
                        <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        Submitted!
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                        </svg>
                        Submit Your Answer
                      </>
                    )}
                  </button>
                </form>

                {isSubmitted && (
                  <div className="success-message">
                    <p>Thank you for your submission! Check back tomorrow to see if your answer made it to the top 3!</p>
                  </div>
                )}
              </div>
            </div>

          </div>
            {/* Google Ad Placeholder */}
            <div className="ad-section-full">
              <div className="ad-placeholder">
                <div className="ad-label">Advertisement</div>
                <div className="ad-content">
                  <p>Google AdSense Ad Space</p>
                  <small>300x250 Medium Rectangle</small>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Top Answers Section */}
      <section className="top-answers">
        <div className="container">
          <div className="section-header">
            <h2>Yesterday's Top 3 Answers</h2>
            <p>These creative interpretations were selected as the most imaginative responses!</p>
          </div>
          
          <div className="answers-grid">
            {topAnswers.map((answer, index) => (
              <div key={answer.id} className={`answer-card ${index === 0 ? 'first-place' : index === 1 ? 'second-place' : 'third-place'}`}>
                <div className="answer-rank">
                  {index === 0 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21l-1.25.5c-.5.2-1.28.2-1.78 0l-1.25-.5A1.25 1.25 0 0 1 4 17v-2.34"/>
                      <path d="M20 14.66V17c0 .55.47.98.97 1.21l1.25.5c.5.2 1.28.2 1.78 0l1.25-.5A1.25 1.25 0 0 0 26 17v-2.34"/>
                      <path d="M12 14.66V17c0 .55.47.98.97 1.21l1.25.5c.5.2 1.28.2 1.78 0l1.25-.5A1.25 1.25 0 0 0 18 17v-2.34"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21l-1.25.5c-.5.2-1.28.2-1.78 0l-1.25-.5A1.25 1.25 0 0 1 4 17v-2.34"/>
                      <path d="M20 14.66V17c0 .55.47.98.97 1.21l1.25.5c.5.2 1.28.2 1.78 0l1.25-.5A1.25 1.25 0 0 0 26 17v-2.34"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21l-1.25.5c-.5.2-1.28.2-1.78 0l-1.25-.5A1.25 1.25 0 0 1 4 17v-2.34"/>
                    </svg>
                  )}
                  <span className="rank-number">#{index + 1}</span>
                </div>
                <div className="answer-content">
                  <p>"{answer.text}"</p>
                  <div className="answer-author">— {answer.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ad Placeholder - Full Width */}
      <section className="ad-section-full">
        <div className="container">
          <div className="ad-placeholder">
            <div className="ad-label">Advertisement</div>
            <div className="ad-content">
              <p>Google AdSense Ad Space</p>
              <small>728x90 Leaderboard</small>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>WordCraft Daily</h3>
              <p>Unleash your creativity, one word at a time.</p>
            </div>
            <div className="footer-section">
              <h4>How It Works</h4>
              <ul>
                <li>Daily creative word challenges</li>
                <li>Submit your interpretation</li>
                <li>See top answers the next day</li>
                <li>No signup required!</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/admin">Admin Panel</Link></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 WordCraft Daily. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
