import "./AboutSection.css";

const TEAM = [
  { name: "Achyut Gyawali",  location: "Bhaktapur, Kathmandu", phone: "+977-9999999999", email: "achyutgyawali777@gmail.com", image: "/achyut.jpg", fb: "https://www.facebook.com/anish.gyawali.505" },
];

export function AboutSection() {
  return (
    <div className="about-container">
      <div className="about-description">
        <h1>About Us</h1>
        <div className="about-row">
          <img className="about-img" src="/kathford1.png" alt="kathford" />
          <div className="about-text left">
            <h3>Flavorsome Finds: Your Ultimate Recipe Haven</h3>
            <p>Embark on a gastronomic journey with our vast collection of recipes, curated to satisfy every craving and culinary curiosity.</p>
            <p>Explore a world of flavors, from comforting classics to innovative creations, all designed to elevate your home cooking experience.</p>
          </div>
        </div>
        <div className="about-row">
          <div className="about-text right">
            <h3>Easy-to-Follow Instructions</h3>
            <p>Our recipes come with clear, step-by-step instructions, ingredients with weight making cooking an enjoyable and stress-free experience.</p>
            <p>Each recipe is accompanied by vivid imagery, guiding you through the cooking process and igniting inspiration.</p>
          </div>
          <img className="about-img" src="/kathford2.jpeg" alt="kathford" />
        </div>
      </div>

      <h1 className="team-title">Our Team</h1>
      <div className="about-content">
        {TEAM.map((person, i) => (
          <div className="about-card" key={i}>
            <a href={person.fb} target="_blank" rel="noreferrer">
              <img className="person-image" src={person.image} alt={person.name} />
            </a>
            <p><strong>{person.name}</strong></p>
            <p>{person.location}</p>
            <p>{person.phone}</p>
            <p>{person.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}