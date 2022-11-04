import React from "react";
import VMC from "./Vmc";


const About = () => {
    return (
        <div>
            <section className="py-4 bg-secondary">
                <div className="container" style={{padding:"100px"}}>
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>ABOUT</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                            Discover. Grow. Transform.
                            </h6>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p>
                            In Moringa we are transforming the way tech education is done in African Markets.
                            All our programs are delivered through a blended learning approach that combines <br/>
                            market-aligned courses, a classroom team of talented mentors with the skills and
                            knowledge to deliver growth and results for learners, and an environment that <br/>
                            supports student creativity, job market preparation in a fun, open, and
                            transformative learning experience. We celebrate our diversity and value strong,<br/>
                            professional relationships that help our students build their
                            futures with greater confidence, capability, and possibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Moringa's Journey</h5>
                    <div className="underline"></div>
                    <p>
                    In 2014, Moringa School launched its maiden Software Development class in Kenya
                    with a cohort of only four (4) students and a vision for “A world in which anyone
                    can create their future”. At that time, there was a growing demand for skilled
                    tech talent as companies increased investment in technology to gain a competitive
                    advantage from their own digital transformation. This demand was not being met
                    by the available local talent due to a lack of skills…Something had to be done!

                    Through the introduction of its 5-6 month Software Development and Data
                    Science Bootcamps, Moringa School embarked on a journey that would
                    integrate over 4,000 learners from diverse backgrounds and
                    experiences while channeling their motivation to learn and
                    grow through market-aligned curriculum, a learning approach
                    that simulates practical on-the-job-experience, and a vibrant
                    community of employer partners, higher learning institutions,
                    and other industry stakeholders. This approach ensured that
                    graduating students were prepared to take up their rightful
                    place in the digital economy evidenced by the EdTech leader’s
                    employment rate of 85% for all job-seeking alumni within 12 months.
                    </p>
                </div>
            </section>

                        {/* Vision and Mission/ Values */}

                        <VMC />

        </div>
    );
}

export default About;
