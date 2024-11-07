import { Tag as TagType } from "@/types/tag";
import Tag from "../global/tag";

interface props {
  title: string;
  description: string;
  tags: TagType[];
}

const Project = ({ title, description, tags }: props) => {
  return (
    <div className="rounded-xl border border-gray-300 bg-white p-4">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="flex flex-wrap gap-2">
        {tags.map((text, index) => (
          <Tag key={index}>{text}</Tag>
        ))}
      </div>
      <div className="">{description}</div>
    </div>
  );
};

export default Project;
