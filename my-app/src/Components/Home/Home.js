import React from "react";
import { useState } from "react";
import './Home.css';
import CoursesSectionCode from "../CoursesSectionCode/CoursesSectionCode";
import FooterSectionCode from "../FooterSectionCode/FooterSectionCode";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import SideBar from "../SideBar/SideBar";

function Home() {

  const navigate = useNavigate();

  const {userName} = useSelector((state) => state.auth.LoginUserDetails)

  const cardsObject = [
    {
      image: "https://cdn-icons-gif.flaticon.com/6569/6569161.gif",
      title: "Personalized Training Plans",
      cardBody: "Get a workout plan that's made just for you. Whether you're starting out or already fit."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/6172/6172522.gif",
      title: "Flexible Schedule",
      cardBody: "Work out when it fits your life. No matter where you are, you can follow your plan on your time."
    },
    {
      image: "https://cdn-icons-gif.flaticon.com/6416/6416336.gif",
      title: "Expert Guidance",
      cardBody: "Test and confirm the market demand for your course by setting and evaluating pricing strategies."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/6172/6172509.gif",
      title: "Nutrition Advice",
      cardBody: "Develop a preliminary version of your course to test its effectiveness and gather feedback."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/7211/7211788.gif",
      title: "Track Your Progress",
      cardBody: "Create and refine your course to ensure long-term viability and ongoing value for your audience."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/6172/6172530.gif",
      title: "Long-Term Results",
      cardBody: "Get access to special bonuses designed to enhance your course creation journey and maximize."
    }
  ]

  const resultObject = [{
    image: "https://www.cookcountydems.com/wp-content/uploads/2023/12/Johnson-Sarah-Headshot.jpg",
    title: "Sarah Johnson",
    description: "The service exceeded all our expectations. From initial consultation to final delivery, the team demonstrated exceptional professionalism and attention to detail. The solution implemented has transformed our workflow efficiency by over 60%."
  },
  {
    image: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/image.jpeg",
    title: "Michael Chen",
    description: "Working with this company has been a game-changer. Their innovative approach solved problems we didn't even know we had. The implementation was seamless and the ongoing support has been outstanding."
  }, {
    image: "https://huntnewsnu.com/wp-content/uploads/2025/01/EmilyRodriguez_1-23-25_MargotMurphy-e1737748629702-1200x1113.jpg",
    title: "Emily Rodriguez",
    description: "The level of professionalism is unmatched in the industry. They delivered our complex project on time and within budget while maintaining excellent communication throughout the process. The team's expertise was evident at every stage."
  },
{
    image: "https://api.curtisbrown.co.uk/media/86216/show/square",
    title: "David Wilson",
    description: "Exceptional service from start to finish. The solution has completely transformed our operations, resulting in a 45% increase in productivity. The training provided was comprehensive and tailored to our specific needs."
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/mr1665jm-look-01-799-v3-67a9cb6c56387.jpg?crop=1xw:0.7240794573643411xh;center,top&resize=640:*",
    title: "Jessica Brown",
    description: "We've seen remarkable improvements across all departments since implementation. The system is intuitive and the support team is always available when we need assistance. Highly recommended!"
  }, {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUD36yrrOpAL5IO6bxNn_urYwXzPcpZUAog&s",
    title: "Robert Taylor",
    description: "Their team understood our complex technical requirements and delivered a solution that not only met but exceeded our expectations. The system integration was flawless."
  }]

  const [page, setPage] = useState(0); // 0 = first 3, 1 = next 3
  const cardsPerPage = 3;

  const startIndex = page * cardsPerPage;
  const visibleResults = resultObject.slice(startIndex, startIndex + cardsPerPage);

  const handleToggle = () => {
    setPage(prev => (prev === 0 ? 1 : 0));
      };

      function handleCourses() {
        navigate('/courses')
      }


  return (
    <>
    <div className="sidebar-home">
      {/* <SideBar/> */}

    </div>
    <div className="home-container">
    <div className="dashBoard-main">
       <div className="dashBoard">
      <h2>welcome!,{userName}</h2>
      <p>you have Succesfully Logged in....</p>
    </div>
    </div>
      <div className="main-container">
        <div className="container container-top">
          <div className="row">
            <div className="col-6">
              <div className="top-left-section">
                <h1 className="top-left-heading">“Wake up with purpose. Walk out with confidence.”</h1>
                <p className="top-left-paragraph">"You don’t need to prove your worth. Just keep rising, and the world will catch up."</p>
                <button className="top-left-courses-button" onClick={handleCourses}>View All Coures</button>
              </div>
            </div>
            <div className="col-6">
              <div className="top-right-section">
                <img className="top-right-img" src="https://images.news9live.com/wp-content/uploads/2024/10/Hardik-Pandya.jpg?w=1200&enlarge=true"/>
              </div>
            </div>
          </div>
        </div>

        <div className="second-container-main">
          <div className="second-container">
            <div className="second-left-section">
              <h1 className="first-section-count">500+</h1>
              <p className="first-section-paragraph">clients who've successfully reached their fitness goals, it's your turn to experience real results.</p>
            </div>
            <div className="second-middle-section">
              <h1 className="second-section-count">4.5/5</h1>
              <p className="second-section-paragraph">from more than 200 reviews. Clients leave feeling strong and motivated.</p>
            </div>
            <div className="second-right-section">
              <h1 className="third-section-count">98%</h1>
              <p className="third-section-paragraph">clients achieve their fitness goals. Whether it's building strength, losing weight.</p>
            </div>
          </div>

          <div className="container-fluid second-image-container">
            <div className="row">
              <div className="col-6">
                <img className="hardik-img" src="https://i1.wp.com/cdn.zeebiz.com/sites/default/files/2023/12/15/272829-hardik-pandya-reuters.jpg?strip=all" />
              </div>

              <div className="col-6">
                <h1 className="second-right-heading">Meet Hardik Pandya</h1>
                <p className="second-right-paragraph">Our body does not get tired — our mind gets tired. So many times in my life, the difference between where I was and where I was able to push my limits was always the fact that, when my mind got tired, I would tell my body to just push — because you will always have extra effort left in your body.
                </p>
                <p className="second-right-paragraph2">
                  The difference is, if you do 20 and I do 20, we are on the same level. But if I push to 25, and I challenge my mind — next time I’m going to do 25, then the next time 30 — that is when I start to level up. That’s when I’m putting in the “wow,” you know, getting a little level up on that.</p>
              </div>

            </div>

          </div>
        </div>

        <div className="cards-head-container">
          <h1 className="cards-heading">Start your fitness journey</h1>
          <div className="container container-main">
            <div className="row row-container">
              {cardsObject.map((cardItem, index) => {
                return (
                  <div class="card card-container" style={{ width: '22rem' }}>
                    <div className="card-img-class">
                      <img class="card-img-top card-img-class" src={cardItem.image} alt="image" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title card-title-container">{cardItem.title}</h5>
                      <p class="card-text card-paragraph-container">{cardItem.cardBody}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button className="cards-button" onClick={handleCourses}>View All Courses</button>
        </div>



        <div className="courses-section">
          <h3 className="courses-heading">Start your fitness journey</h3>

           <CoursesSectionCode />

        </div>

        <div className="real-results-container">
      <h3 className="real-result-heading">Real Results from Real People</h3>

      <div className="container">
        <div className="row row-res-container">
          {visibleResults.map((resObj, index) => (
            <div
              key={index}
              className="card result-card-container"
              style={{ width: '380px' }}
            >
              <div className="real-img-container">
                <img
                  src={resObj.image}
                  className="card-img-top res-img"
                  alt="img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title res-title">{resObj.title}</h5>
                <p className="card-text res-paragraph">{resObj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots button toggles between pages */}
      <button className="show-more-dots" onClick={handleToggle}>
        ...
      </button>

      <button className="reslut-course-button" onClick={handleCourses}>View All Courses</button>
    </div>

      < FooterSectionCode/>
      </div>
      </div>
    </>
  )
  }

  export default Home;
