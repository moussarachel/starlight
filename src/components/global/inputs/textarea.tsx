import { TextareaInput } from "@/types/questions";
import { Label } from "@/components/ui/label";
import { Textarea as ShadCNTextarea } from "@/components/ui/textarea";

const Textarea = ({ meta }: { meta: TextareaInput }) => {
  const { title, placeholder } = meta;
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor={title}>{title}</Label>
      <ShadCNTextarea placeholder={placeholder} id={title} />
    </div>
  );
};

export default Textarea;
