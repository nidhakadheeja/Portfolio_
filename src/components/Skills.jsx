function Skills() {

  const skills = [
    "Python",
    "Flask",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "MongoDB",
    "GitHub"
  ];

  return (
    <section
      id="skills"
      className="bg-gray-100 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white px-6 py-3 rounded-full shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;