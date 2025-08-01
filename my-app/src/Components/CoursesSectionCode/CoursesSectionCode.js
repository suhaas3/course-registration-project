import React from "react";
import './CoursesSectionCode.css';

function CoursesSectionCode() {

   const coursesObject = [{
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGRsL7h26w-Bg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711431970518?e=2147483647&v=beta&t=7MUoFdBoTt2bbPGQLIg36dcFCRHCwu1HyicK282aK6Y",
    title: "Full Stack Development",
    description: "Build real projects,enhance your skills, and land your dream job as Full stack developer"
  },
  {
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png",
    title: "FrontEnd Development",
    description: "Experience the real-world of frontend development!"
  }, {
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
    title: "Back-End Development",
    description: "Prepare for a Back-End career with a real-world office simulation experience! Added a preview for our class on how i will be teaching check below"
  },
]

  return (
    <>

          <div className="container">
            <div className="row row-course-container">
              {coursesObject.map((course, index) => {
                return (
                  <div className="card course-card" style={{ width: '380px' }}>
                    <div className="course-image">
                      <img className="card-img-top course-img" src={course.image} alt="image" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title course-title">{course.title}</h5>
                         <p className="card-tex course-description">{course.description}</p>
                      <button className="courses-button">Register Now</button>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

    </>
  )
}

export default CoursesSectionCode;