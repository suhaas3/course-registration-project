import React from "react";
import './Courses.css';
import FooterSectionCode from "../FooterSectionCode/FooterSectionCode";
import SideBar from "../SideBar/SideBar";
function Courses() {

  const coursesObject = [{
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGRsL7h26w-Bg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711431970518?e=2147483647&v=beta&t=7MUoFdBoTt2bbPGQLIg36dcFCRHCwu1HyicK282aK6Y",
    title: "Full Stack Development",
    description: "Build real projects,enhance your skills, and land your dream job as Full stack developer",
    MarketPrice: 100000,
    originalPrice: 25000
  },
  {
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png",
    title: "FrontEnd Development",
    description: "Experience the real-world of frontend development!",
    MarketPrice: 50000,
    originalPrice: 15000
  }, {
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
    title: "Back-End Development",
    description: "Prepare for a Back-End career with a real-world office simulation experience! Added a preview for our class on how i will be teaching check below",
    MarketPrice: 100000,
    originalPrice: 20000
  },
]

  return (
    <>
      <div className="sidebar-home">
        <SideBar/>

      </div>

      <div className="course-section-container">
        <div className="core-course-container">
          <div className="container">
            <div className="row row-course-container">
              {coursesObject.map((course, index) => {
                return (
                  <div class="card course-card" style={{ width: '380px' }}>
                    <div className="course-image">
                      <img class="card-img-top course-img" src={course.image} alt="image" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title course-title">{course.title}</h5>
                      <p class="card-tex course-description">{course.description}</p>
                      <div className="cost-container">
                        <p className="course-discount">₹{course.MarketPrice}</p>
                        <p className="course-cost">₹{course.originalPrice}</p>
                      </div>
                      <button className="buy-button">Buy Now</button>
                      <p className="discount-paragraph"><img src="https://static.vecteezy.com/system/resources/thumbnails/008/963/155/small/sales-discount-price-logo-free-vector.jpg" className="discount-img" />Flexible pricing plans
                      </p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
        <div className="core-footer-container">
          <FooterSectionCode />
        </div>
      </div>
    </>
  )
}


export default Courses;