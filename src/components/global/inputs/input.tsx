import { Input as ShadCNInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextInput } from "@/types/questions";

const Input = ({ meta }: { meta: TextInput }) => {
  const { title, placeholder, value, type, disabled } = meta;

  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor={title}>{title}</Label>
      <ShadCNInput
        type={type}
        id={title}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
    </div>
  );
};

export default Input;
