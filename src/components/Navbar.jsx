function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-center gap-6 sticky top-0 z-50">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;