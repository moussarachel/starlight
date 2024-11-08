"use client";

import Button from "@/components/global/button";
import Radio from "@/components/global/inputs/radio";
import Textarea from "@/components/global/inputs/textarea";
import Select from "@/components/global/inputs/select";
import { Questions } from "@/types/questions";
import Input from "@/components/global/inputs/input";

interface props {
  title: string;
  questions: Questions[];
}

const Application = ({ title, questions }: props) => {
  return (
    <div className="space-y-8 rounded-md border-2 border-starlight-lightgray/25 p-10">
      <p>Apply to {title}</p>

      <Input
        meta={{
          type: "text",
          title: "Name",
          placeholder: "Enter a Name",
          maxLength: 250,
          value: "SAMPLE NAME",
          disabled: true,
        }}
      />

      <Input
        meta={{
          title: "Email",
          placeholder: "Enter your email",
          value: "",
          type: "text",
          maxLength: 250,
          disabled: false,
        }}
      />

      {questions.map((question, index) => {
        const { type } = question;

        if (type === "radio") return <Radio meta={question} key={index} />;
        if (type === "textarea")
          return <Textarea meta={question} key={index} />;
        if (type === "select") return <Select meta={question} key={index} />;
      })}

      <Button onClick={() => {}}>Submit</Button>
    </div>
  );
};

export default Application;
