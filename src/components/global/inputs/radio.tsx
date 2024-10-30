"use client";

import { useState } from "react";
import { RadioInput } from "@/types/questions";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Button from "../button";

const Radio = ({ meta }: { meta: RadioInput }) => {
  const { title, options } = meta;
  const [selected, setSelected] = useState<string | number>(options[0]);

  return (
    <div>
      <Label>{title}</Label>
      <RadioGroup
        defaultValue=""
        value={String(selected)}
        className="flex flex-row space-x-4"
      >
        {options.map((option) => (
          <div
            key={option}
            className={`flex items-center space-x-2 rounded-sm border py-1 pl-2 pr-4 hover:bg-starlight-blue hover:text-white ${selected === String(option) ? "bg-starlight-blue text-white" : "bg-white"}`}
            onClick={() => setSelected(String(option))}
          >
            <RadioGroupItem
              value={String(option)}
              id={`option-${option}`}
              className="hidden"
            />
            <Button onClick={() => {}}>{option}</Button>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Radio;
