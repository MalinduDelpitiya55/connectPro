import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobPostImg1 from './../assets/jobPost/img1.jpg'; // Import your image assets
import JobPostImg2 from './../assets/jobPost/img2.jpg';
import JobPostImg3 from './../assets/jobPost/img3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const CardList = () => {
    return (
        <div>
            <style>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    /* font-family: 'Open Sans', sans-serif; */
                }
                
                body {
                    background: #ecececdb;
                }
                
                .card-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
                    max-width: 80%;
                    margin: 0 auto;
                    padding: 20px;
                    gap: 20px;
                }
                
                .card-list .card-item {
                    background: #fff;
                    padding: 6px;
                    border-radius: 8px;
                    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
                    list-style: none;
                    cursor: pointer;
                    text-decoration: none;
                    border: 2px solid transparent;
                    transition: border 0.5s ease;
                }
                
                .card-list .card-item:hover {
                    border: 2px solid #000;
                }
                
                .card-list .card-item img {
                    width: 100%;
                    aspect-ratio: 16/9;
                    border-radius: 8px;
                    object-fit: cover;
                }
                
                .card-item h3 {
                    color: #000;
                    font-size:15px;
                    margin-top: 28px;
                    font-weight: 400;
                }

                .text {
                    height: 80px;
                }
                
                hr {
                    border: none;
                    height: 2px;
                    background-color: black; 
                    width: 100%; 
                    margin-top: 50px auto;
                    margin-bottom: 20px;
                }
                
                .footer {
                    display:flex;
                    justify-content:space-between;
                    align-items:center;  
                }
                
                .amt {
                    color:black;
                    font-weight:bold;
                }
                
                #heart {
                    width: 25px;
                    height: 20px;
                }
                
                @media (max-width: 1200px) {
                    .card-list .card-item {
                        padding: 15px;
                    }
                }
                
                @media screen and (max-width: 980px) {
                    .card-list {
                        margin: 0 auto;
                    }
                }
                `}
            </style>
            <div className="card-list">
                <a href="#" className="card-item">
                    <img src={JobPostImg1} alt="Card Image" />
                  
            <div>
            
            <img style={{
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    objectFit: 'cover',
                    marginTop:'20px'
                }}
                src={JobPostImg1}  alt="Profile Picture" />

                <div className="profileName">
               <p style={{ textAlign: 'end', margin: '0' }}>James Anderson</p>
            <p style={{ textAlign: 'end' }}>United Kingdom <span className="profile rating">4.8</span></p>
                </div>

            </div>

                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                 <img src={JobPostImg3} alt="Card Image" />
                    <div className="text">
                        <h3>I will create minimal and luxury logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                    <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                 <img src={JobPostImg3} alt="Card Image" />
                    <div className="text">
                        <h3>I will create minimal and luxury logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                    <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                 <img src={JobPostImg3} alt="Card Image" />
                    <div className="text">
                        <h3>I will create minimal and luxury logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                    <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                 <img src={JobPostImg3} alt="Card Image" />
                    <div className="text">
                        <h3>I will create minimal and luxury logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg1} alt="Card Image" />
                    <div className="text">
                        <h3>I will design modern minimalist luxury business logo design.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                <a href="#" className="card-item">
                <img src={JobPostImg2} alt="Card Image" />
                    <div className="text">
                        <h3>I will design a professional sponsorship proposal, business proposal, and letter.</h3>
                    </div>
                    <hr />
                    <div className="footer">
                    <p><FontAwesomeIcon icon={faHeart} /></p>
                        <span className="amt">Rs39393</span>
                    </div>
                </a>
                
            </div>
        </div>
    );
}

export default CardList;