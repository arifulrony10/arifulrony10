const Project = ({ project }) => {
  return (
    <article className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-slate-300 relative text-center">
      <img className="w-full" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 font-kanit">{project.title}</h3>
        <p>{project.description}</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <a href={project.url}target="_blank" className="font-kanit uppercase tracking-wide py-2 mx-2 rounded-md transition-all hover:border-b-2
        hover:shadow-slate-300  hover:shadow-md hover:text-slate-600 hover:transition-all">Source Code</a>
          <a href={project.source}target="_blank" className="font-kanit uppercase tracking-wide py-2 mx-2 rounded-md transition-all hover:border-b-2
        hover:shadow-slate-300  hover:shadow-md hover:text-slate-600 hover:transition-all">Live Preview</a>
        </div>
      </div>
    </article>
  );
};
export default Project;
