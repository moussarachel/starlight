import Add from "@/components/programs/add";
import Project from "@/components/programs/project";
import { Project as ProjectType } from "@/types/projects";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";

const projects: ProjectType[] = [
  {
    title: "ACM WEBSITE",
    description: "HELLO THIS IS A VERY COOL DESCRIPTION",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "ACM WEBSITE",
    description: "HELLO THIS IS A VERY COOL DESCRIPTION",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "ACM WEBSITE",
    description: "HELLO THIS IS A VERY COOL DESCRIPTION",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
];

const Page = () => {
  return (
    <div className="">
      <div className="mx-8 mt-6 flex items-center justify-between">
        <Label className="text-2xl">Ignite 2024 Projects</Label>
        <AlertDialog>
          <AlertDialogTrigger>Add Project</AlertDialogTrigger>
          <Add />
        </AlertDialog>
      </div>

      <div className="m-6 grid grid-cols-3 gap-4">
        {projects.map(({ title, description, tags }, index) => (
          <Project
            key={index}
            title={title}
            description={description}
            tags={tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
