import "./Schools.css";

const schools = [
  {
    title: "School of Engineering",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600",
  },
  {
    title: "School of Management",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600",
  },
  {
    title: "School of Pharmacy",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",
  },
  {
    title: "School of Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
  },
  {
    title: "School of Architecture",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600",
  },
  {
    title: "School of Agriculture",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600",
  },
];

const Schools = () => {
  return (
    <section className="schools">

      <h5>OUR SCHOOLS</h5>

      <h2>Explore Our Academic Schools</h2>

      <div className="school-container">

        {schools.map((item, index) => (
          <div className="school-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="overlay">

              <h3>{item.title}</h3>

              <button>Read More</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Schools;