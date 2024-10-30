"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

import Input from "@/components/global/inputs/input";
import Select from "@/components/global/inputs/select";
import Textarea from "@/components/global/inputs/textarea";
import { Label } from "../ui/label";
import Button from "../global/button";

const Add = () => {
  return (
    <AlertDialogContent className="max-w-4xl">
      <AlertDialogHeader>
        <Label className="text-xl">Add New Project</Label>
      </AlertDialogHeader>
      <Input
        meta={{
          title: "Title",
          type: "text",
          placeholder: "i.e WINC",
          maxLength: 32,
          value: "",
          disabled: false,
        }}
      />
      <Textarea
        meta={{
          title: "Description",
          type: "textarea",
          placeholder: "Description of your project",
          maxLength: 500,
          value: "",
          disabled: false,
        }}
      />
      <Select
        meta={{
          title: "Tech Stack",
          type: "select",
          options: ["TypeScript", "Next.js", "TailwindCSS"],
          value: "",
          disabled: false,
        }}
      />
      <Input
        meta={{
          title: "Total Spots",
          type: "text",
          placeholder: "e.g 10",
          maxLength: 5,
          value: "",
          disabled: false,
        }}
      />
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button onClick={() => {}}>Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button onClick={() => {}}>Add</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default Add;
