import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Home.scss";
import { Link } from "react-scroll";

export const Home = () => {

  const [div, setdiv] = useState(true);
  const handleeducation1 = () => {
    setdiv(true)
  }
  const handleeducation2 = () => {
    setdiv(false)
  }

  const [exp, setexp] = useState(true);
  const handlecompony1 = () => {
    setexp(true)
  }
  const handlecompony2 = () => {
    setexp(false)
  }


  const [isActive, setActive] = useState(false);
  const [projects, setprojects] = useState(true);
  const handleprojects = () => {
    setprojects(false)
    setActive(!isActive);
  }
  const handleclones = () => {
    setprojects(true)
    setActive(!isActive)
  }
  return (
    <div className="Main">
      <Header />
      <div className="HomeBody">
        <section id="home">
          <div className="container">
            <div className="MainDetails">
              <div className="userDetails">
                <div className="MainTitle">
                  <span>Product Designer</span>
                </div>
                <h2>
                  <span>H</span>asrh <span>V</span>iradiya
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  sed nam sint deleniti quia distinctio mollitia magni saepe
                  aperiam hic, autem quam dolor repudiandae perferendis fugiat
                  excepturi! Quae, consequuntur ex!
                </p>
                <div className="contactBtns">
                  <button className="perpuleBtn">Contact Me</button>
                  <button className="outlineBtn">Download CV</button>
                </div>
              </div>
              <div className="userImages">
                <img src="../Assest/bgshape/Capture.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="Education">
          <div className="container">
            <div className="MainTitle">
              <span>EDUCATION</span>
            </div>
            <div className="MainDetails educationdiv">
              <div className="selectBox">


                {/* <Link to="educationscroll" spy={true} smooth={true}> */}
                <div className="clgBox" onClick={handleeducation1}>
                  <img src="../Assest/collagelogo/lambton.png" alt="" />
                  <h3>Lambton College</h3>
                </div>
                {/* </Link> */}

                {/* <Link to="educationscroll" spy={true} smooth={true}> */}
                <div className="clgBox" onClick={handleeducation2}>
                  <img src="../Assest/collagelogo/GNU.png" alt="" />
                  <h3>Ganpat University</h3>
                </div>
                {/* </Link> */}
              </div>


              <div className="right" id="educationscroll">
                <div style={{ display: div ? "block" : "none" }}>
                  <div className="detailHeader">
                    <img src="../Assest/collagelogo/lambton.png" alt="" />
                    <div>
                      <h3>" Lambton College "</h3>
                      <span>
                        <sup>Pursuing</sup>(Sept 2020 - April 2022)
                      </span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Computer Software and Database development</h3>
                    <h5>topics</h5>
                    <div className="topic">
                      <div className="topicDiv">
                        <span>Web Technology</span>
                      </div>
                      <div className="topicDiv">
                        <span>Java (EE)</span>
                      </div>
                      <div className="topicDiv">
                        <span>Java (SE)</span>
                      </div>
                      <div className="topicDiv">
                        <span>Database development</span>
                      </div>
                      <div className="topicDiv">
                        <span>C#</span>
                      </div>
                      <div className="topicDiv">
                        <span>Asp.Net</span>
                      </div>
                      <div className="topicDiv">
                        <span>Python</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: div ? "none" : "block" }}>
                  <div className="detailHeader">
                    <img src="../Assest/collagelogo/GNU.png" alt="" />
                    <div>
                      <h3>" Ganpat University "</h3>
                      <span>
                        (July 2015 - May 2019)
                      </span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Bachelor of Technology in Computer Engineering</h3>
                    <h5>topics</h5>
                    <div className="topic">
                      <div className="topicDiv">
                        <span>Web Technology</span>
                      </div>
                      <div className="topicDiv">
                        <span>Cloud Computing</span>
                      </div>
                      <div className="topicDiv">
                        <span>Networking</span>
                      </div>
                      <div className="topicDiv">
                        <span>Advcance JAVA</span>
                      </div>
                      <div className="topicDiv">
                        <span>Database development</span>
                      </div>
                      <div className="topicDiv">
                        <span>C#</span>
                      </div>
                      <div className="topicDiv">
                        <span> ASP.NET</span>
                      </div>
                      <div className="topicDiv">
                        <span> Android</span>
                      </div>
                      <div className="topicDiv">
                        <span> IOS</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </section>

        <section id="Experince">
          <div className="container">
            <div className="MainTitle">
              <span>my skills</span>
            </div>
            <div className="skills">
              <div className="skillBg">
                <div className="skillProgress">
                  <span>HTML / CSS</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress">
                  <span>database</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress">
                  <span>C</span>
                </div>
              </div>

              <div className="skillBg">
                <div className="skillProgress w-85">
                  <span>java</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress w-85">
                  <span>asp.net</span>
                </div>
              </div>

              <div className="skillBg">
                <div className="skillProgress w-80">
                  <span>java(j2ee)</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress w-80">
                  <span>javascript</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress w-80">
                  <span>angular js</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress w-80">
                  <span>node js</span>
                </div>
              </div>
              <div className="skillBg">
                <div className="skillProgress w-80">
                  <span>react js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Skills">
          <div className="container">
            <div className="MainTitle">
              <span>experince</span>
            </div>
            <div className="MainDetails experincediv">

              <div className="new_right" id="compony_details">
                <div className="selectedDetails" style={{ display: exp ? 'block' : 'none' }}>
                  <div className="detailHeader">
                    <img src="../Assest/componylogo/getway.jpg" alt="" />
                    <div>
                      <h3>Gatway Techno Labs</h3>
                      <span>(Ahmedabad, India)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Software Developer (Jan 2019 - Jan 2020)</h3>
                    <p>
                      I wroked around one year as a software developer at Gateway Techno Labs. Technologies back in India, working on critical projects for their clients. I had the opportunity to develop website named AutoDap in agile methodology using different technologies like Angular JS, Node JS, including CSS/CSS3 and HTML5.
                    </p>
                  </div>
                </div>
                <div className="selectedDetails" style={{ display: exp ? 'none' : 'block' }}>

                  <div className="detailHeader">
                    <img src="../Assest/componylogo/bbt.png" alt="" />
                    <div>
                      <h3>BrainyBeam Technologies </h3>
                      <span>(Ahmedabad, India)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Salesforce Developer - Intern (May 2018 - Dec 2018)</h3>
                    <p>
                      I was a salesforce developer (Intern) at Brainy Beam Technology, where I have worked on salesforce applications. My responsibilities were to assist a data project team, develop customized solutions within a salesforce platform, and design, code, and implement salesforce applications.
                    </p>
                  </div>

                </div>
              </div>




              <div className="selectBox">
                <div className="clgBox expBox">
                  <img src="../Assest/componylogo/getway.jpg" alt="" />
                  <h3>Gatway Techno Labs</h3>
                  <div className="contactBtns">
                    <Link to="compony_details" spy={true} smooth={true}>
                      <button className="perpuleBtn" onClick={handlecompony1}>View Detail</button>
                    </Link>
                  </div>
                </div>
                <div className="clgBox expBox" >
                  <img src="../Assest/componylogo/bbt.png" alt="" />
                  <h3>BrainyBeam Technologies</h3>
                  <div className="contactBtns">
                    <Link to="compony_details" spy={true} smooth={true}>
                      <button className="perpuleBtn" onClick={handlecompony2}>View Detail</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Portfolio">
          <div className="container">
            <div className="MainTitle project_clones">
              <span>my projects</span>
              <div className="option">
                <button className={isActive ? 'activeBtn' : null} onClick={handleprojects}>Projects</button>
                <button className={isActive ? 'null' : 'activeBtn'} onClick={handleclones}>Clones</button>
              </div>
            </div>
            <div className="projectt">
              <div className="project-box" style={{ display: projects ? 'none' : 'flex', alignItems: 'center', justifyContent: "space-between", position: 'relative', flexWrap: 'wrap' }}>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p1.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>MyCoVTest Hub (2021)</h4>
                      <p>MyCoVTest Hub is to help collect the test results and to provide an accurate picture of the local cases, including more detailed demographics, as well as a regional breakdown by postcode.</p>
                      <span><b>Technologies :</b>  JAVA, JSP, SERVLET, MYSQL</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p2.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Cars Here (2020)</h4>
                      <p>Basically, Cars here is a website which allow user to rent or excahnge a car with other users. Also, real time feedback
                        and car's information.
                      </p>
                      <span><b>Technologies :</b>  HTML, CSS, JavaScript</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p3.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Shoppy (2020)</h4>
                      <p>Shoppy is a Android application where users can see different brands of shoes and they
                        can buy the shoes of their own choice.

                      </p>
                      <span><b>Technologies :</b>  Android, Java, Firebase</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p4.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Cake Shop (2019)</h4>
                      <p>The cake shop is an online cake shopping site, and users can modify cakes according to their requirements;
                        an online payment and delivery tracking system is there for user flexibility.


                      </p>
                      <span><b>Technologies :</b> JAVA, JSP, MYSQL, Servlet</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p5.gif" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Snapkart Portfolio (2017)</h4>
                      <p>A web application where users can join and share their portfolio with advertising agencies for photoshoot selection.



                      </p>
                      <span><b>Technologies :</b> JAVA, JSP, Servlet, MySQL</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p6.gif" alt="Portfolio Item" />
                    <figcaption>
                      <h4>BELL BOY (2021)</h4>
                      <p>Bell Boy is a Android Application where Users can view and book the Hotels of their own
                        choice.
                      </p>
                      <span><b>Technologies :</b> Android, Java, Firebase</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div style={{ display: projects ? 'flex' : 'none', alignItems: "center", justifyContent: 'center', position: "relative" }} >
                <div className="clones">
                  <figure>
                    <img src="../Assest/projects/tinder-clone.gif" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Tinder Clone</h4>
                      <p> I have made tinder clone. I used React JS for client-side and used Node.JS for server side. MongoDB has been used for store the data and deployed side
                        through firebase.
                      </p>
                      <span><b>Technologies :</b>  React.JS, Node.JS, MongoDB, Firebase</span>
                      <div className="buttondiv">
                        <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Contact">
          <div className="container">
            <div className="MainTitle">
              <span>get in touch</span>
            </div>
            <div className="touch-row">
              <div className="address">
                <div className="address-box">
                  <span>
                    <i class="fas fa-phone"></i>
                  </span>
                  <p>(437) 772-7878</p>
                </div>
                <div className="address-box">
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <address>
                    35 Fountainhead Road <br />
                    North York, ON, M3J 2V7 <br />
                    CANADA
                  </address>
                </div>
                <div className="address-box">
                  <span>
                    <i class="fas fa-envelope"></i>
                  </span>
                  <p>jemishviradiya9@gmail.com</p>
                </div>
                <div className="address-box">
                  <ul>
                    <li>
                      <i class="fab fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fab fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fab fa-github"></i>
                    </li>
                    <li>
                      <i class="fab fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fab fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact-me">
                <input type="text" placeholder="Enter Name" />
                <input type="text" placeholder="Enter Email" />
                <textarea placeholder="Enter Message"></textarea>
                <div className="contactBtns">
                  <button className="perpuleBtn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
