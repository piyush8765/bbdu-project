import "./Hero.css";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
        data-aos="fade-up"
    >
      <div className="hero-content">

        <div className="hero-left">
          <h1>
            Best Private University <br />
            <span>in Uttar Pradesh (India)</span>
          </h1>

          <p>
            Babu Banarasi Das University integrates groundbreaking research,
            inclusive education and innovation to shape future leaders.
          </p>

          <button>APPLY TODAY →</button>
        </div>

        <div className="hero-right">

          <div className="form-box">

            <h2>Apply Today</h2>

            <input type="text" placeholder="Student Name" />

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Mobile Number" />

            <select>
              <option>Select Discipline</option>
            </select>

            <input type="text" placeholder="Program" />

            <button>APPLY NOW</button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;