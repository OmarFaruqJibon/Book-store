import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./books.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[]);

    // AOS EFFECT
    useEffect(() =>{
        AOS.init();
    },[]);

    // slice courses array to 4 elements
    const fourCourses = courses.slice(0, 4);
    return (
        <div data-aos="fade-up" data-aos-delay="500">
            <h1 className="coutses-title">Our Books</h1>
            <div className="row g-4 m-5 mt-0">
            {
                fourCourses.map((course=> 
                    <div key={course.key} className="col-md-3 col-12 mt-5">
                    <div className="cart">
                        <div className="thumb">
                            <img src={course.courseThumb} alt="" />
                        </div>
                        <div className="cart-detail">
                            <p className="course-item-heading"><small>BOOK</small></p>
                            <h5>{course.bookTitle}</h5>
                            <p><small>By : {course.instructorName}</small></p>
                            <p><small>Rating : {course.rating}<i className="rating fas fa-star"></i></small></p>
                            <div className="d-flex justify-content-between">
                                {/* <p><small>Duration : {course.courseDuration}</small></p> */}
                                <p className="price"><small>$ {course.price}</small></p>
                            </div>
                           <div className="text-center">
                            <button className="btn detail-btn">Learn More</button>
                           </div>
                            
                        </div>
                    </div>
                </div>
                    ))}
        </div>
        </div>
    );
};

export default Home;