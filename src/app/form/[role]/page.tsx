"use client";

import Button from "@/components/global/button";
import Text from "@/components/global/inputs/input";
import { Label } from "@/components/ui/label";
import { roles } from "@/forms/roles/index";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface props {
  params: {
    role: string;
  };
}

const Page = ({ params }: props) => {
  const { role } = params;

  const { title, description } = roles(role);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-2">
      <div className="w-1/2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/form">Forms</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/form/${role}`} className="capitalize">
                {role}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <p className="text-2xl font-bold text-starlight-blue">{title}</p>
      <p className="w-1/2">{description}</p>
      <div className="border-starlight-lightgray mt-4 flex w-1/2 flex-col gap-4 rounded-xl border-2 p-8">
        <Label className="text-xl">Request {title} Access</Label>

        <Text
          meta={{
            type: "text",
            title: "Name",
            placeholder: "Enter a Name",
            maxLength: 250,
            value: "SAMPLE NAME",
            disabled: true,
          }}
        />

        <Text
          meta={{
            type: "text",
            title: "Email",
            placeholder: "Enter an Email",
            maxLength: 250,
            value: "SAMPLE EMAIL",
            disabled: true,
          }}
        />

        <Button onClick={() => {}}>Submit</Button>
      </div>
    </div>
  );
};

export default Page;
