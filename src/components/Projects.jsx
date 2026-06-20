function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-10"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="shadow-lg p-6 rounded-xl">
          <h3 className="text-2xl font-bold">
            NearbyNow
          </h3>

          <p className="mt-4">
            Full-stack platform connecting local
            businesses and customers using
            Flask and MySQL.
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h3 className="text-2xl font-bold">
            OptiCode
          </h3>

          <p className="mt-4">
            AI-powered code optimization platform
            built using React, Flask and MongoDB.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;