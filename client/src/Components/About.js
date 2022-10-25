import React from "react";
import VMC from "./Vmc";

const About = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>ABOUT</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                            Discover. Grow. Transform.
                            </h6>
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
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        Lorem ipsum sjsdjsdhsdhdhhjshdh
                    </p>
                </div>
            </section>

                        {/* Vision and Mission/ Values */}

                        <VMC />

        </div>
    );
}

export default About;
