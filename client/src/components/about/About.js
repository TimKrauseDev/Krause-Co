import React from "react";

const About = () => {
  return (
    <section id="about" className="">
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0">Best damn seeds around.</h1>
          </div>
        </div>
      </header>
      <section id="scroll" className="about-section pt-5">
        <div className="container px-2 px-md-5">
          <div className="row gx-5 align-items-center">
            <div className="col-md-6 order-md-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={require(`../../imgs/about/about-pepper.jpg`)}
                  alt="pepper"
                />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="p-5">
                <h2 className="display-4">Always high germination rates...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container px-2 px-md-5">
          <div className="row gx-5 align-items-center">
            <div className="col-md-6">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={require(`../../imgs/about/about-strawberry.jpg`)}
                  alt="pepper"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5">
                <h2 className="display-4">Quality Controlled</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section pb-5">
        <div className="container px-2 px-md-5">
          <div className="row gx-5 align-items-center">
            <div className="col-md-6 order-md-2">
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={require(`../../imgs/about/about-pepper-2.jpg`)}
                  alt="pepper"
                />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="p-5">
                <h2 className="display-4">High Yield Plants</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae!
                  Ratione voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
