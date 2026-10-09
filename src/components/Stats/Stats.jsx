import "./Stats.css";
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;
const Stats = () => {
  return (
    <section className="stats">

      <div className="box" data-aos="zoom-in" data-aos-delay="100">
        <h2>
          <CountUp
            end={1200}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
          />
          +
        </h2>
        <p>Faculty Members</p>
      </div>

      <div className="box" data-aos="zoom-in" data-aos-delay="200">
        <h2>
          <CountUp
            end={50000}
            duration={3}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
          +
        </h2>
        <p>Students</p>
      </div>

      <div className="box" data-aos="zoom-in" data-aos-delay="300">
        <h2>
          <CountUp
            end={95}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
          />
          %
        </h2>
        <p>Placement</p>
      </div>

      <div className="box" data-aos="zoom-in" data-aos-delay="400">
        <h2>
          <CountUp
            end={300}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
          />
          +
        </h2>
        <p>Recruiters</p>
      </div>

      <div className="box" data-aos="zoom-in" data-aos-delay="500">
        <h2>
          <CountUp
            end={20}
            duration={3}
            enableScrollSpy
            scrollSpyOnce
          />
          +
        </h2>
        <p>Schools</p>
      </div>

      <div className="box" data-aos="zoom-in" data-aos-delay="600">
        <h2>B+</h2>
        <p>NAAC Grade</p>
      </div>

    </section>
  );
};

export default Stats;