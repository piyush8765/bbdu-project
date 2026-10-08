import "./Programs.css";

const data = [
  {
    title: "B.Tech",
    desc: "Engineering & Technology Programs",
  },
  {
    title: "MBA",
    desc: "Management Studies",
  },
  {
    title: "BCA",
    desc: "Computer Applications",
  },
  {
    title: "B.Pharm",
    desc: "Pharmacy Programs",
  },
  {
    title: "LLB",
    desc: "Law Courses",
  },
  {
    title: "B.Sc Agriculture",
    desc: "Agriculture Studies",
  },
];

const Programs = () => {
  return (
    <section className="programs">

      <h5>POPULAR COURSES</h5>

      <h2>Choose Your Dream Program</h2>

      <div className="program-grid">

        {data.map((item, index) => (
          <div className="program-card" key={index}>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>Know More</button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Programs;