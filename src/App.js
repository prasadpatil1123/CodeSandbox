import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="kashi.jpg" alt="Kashiprasad Patil" />;
}

function Intro() {
  return (
    <div>
      <h1>Kashiprasad Patil</h1>
      <p>
        Full-stack web developer and Udemy student. When I'm not coding or
        taking a course, I enjoy playing cricket, cooking (and eating), or
        simply watching anime shows at home.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="skyblue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Java" emoji="💪" color="green" />
      <Skill skill="Git + GitHub" emoji="💪" color="orangered" />
      <Skill skill="MySQL" emoji="💪" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
