const Projects = ({ projects }: { projects: string[] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap items-center gap-3">
        {projects.map((status, index) => (
          <p
            className="rounded-md bg-starlight-blue px-7 py-1.5 text-sm font-bold text-white"
            key={index}
          >
            {status}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Projects;
