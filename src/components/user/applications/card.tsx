"use client";
import {
  Card as ShadCNCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Button from "@/components/global/button";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  name: string;
  role: string;
  place: string;
  time: string;
}

const Card = ({ image, name, role, place, time }: Props) => {
  return (
    <ShadCNCard>
      <CardHeader>
        <CardTitle>
          <Image src={image} alt="Logo" />
        </CardTitle>
        <CardDescription>
          {name} {time}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {role} | {place}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => {}}>Apply</Button>
      </CardFooter>
    </ShadCNCard>
  );
};

export default Card;
