import Card from "./card";
import logo from "@/public/logo.webp";

const projects = [
  {
    image: logo,
    name: "ACM Ignite",
    role: "Frontend Engineer",
    place: "In Person (UC Riverside) or Remote",
    time: "Fall 2024",
  },
  {
    image: logo,
    name: "ACM Ignite",
    role: "Frontend Engineer",
    place: "In Person (UC Riverside) or Remote",
    time: "Fall 2024",
  },
  {
    image: logo,
    name: "ACM Ignite",
    role: "Frontend Engineer",
    place: "In Person (UC Riverside) or Remote",
    time: "Fall 2024",
  },
];

const Apply = () => {
  return (
    <div className="h-full w-11/12">
      User Application
      <div className="flex gap-3">
        {projects.map(({ image, name, role, place, time }, index) => (
          <Card
            key={index}
            image={image}
            name={name}
            role={role}
            place={place}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

export default Apply;
