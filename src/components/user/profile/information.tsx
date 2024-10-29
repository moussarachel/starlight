import Select from "../../global/inputs/select";
import Radio from "../../global/inputs/radio";
import Input from "../../global/inputs/input";
import Textarea from "@/components/global/inputs/textarea";
import { questions } from "@/data/profile/information";

const Information = () => {
  return (
    <div className="border-starlight-lightgray flex h-1/2 flex-col gap-4 rounded-xl border-2 p-8">
      {questions.map((question, index) => {
        const { type } = question;

        if (type === "radio") return <Radio meta={question} key={index} />;
        if (type === "textarea")
          return <Textarea meta={question} key={index} />;
        if (type === "select") return <Select meta={question} key={index} />;
        if (type === "text") return <Input meta={question} key={index} />;
      })}
    </div>
  );
};

export default Information;
