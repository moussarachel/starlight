import Card from "./card";
import Image from "next/image";

const apply = () => {
  const cardData = [
    {
      image: <Image src="" alt="</>" />,
      name: "ACM Ignite",
      role: "Frontend Engineer",
      place: "Remote or In Person (UC Riverside)",
      time: "Fall 2024",
      buttonName: "Apply",
    },
    {
      image: <Image src="" alt="</>" />,
      name: "ACM Create",
      role: "Website Designer",
      place: "Remote or Hybrid (UC Riverside)",
      time: "Fall 2024",
      buttonName: "Apply",
    },
    {
      image: <Image src="" alt="</>" />,
      name: "ACM Forge",
      role: "Hardware/Software Engineer",
      place: "In Person (UC Riverside)",
      time: "Fall 2024",
      buttonName: "Apply",
    },
  ];

  return (
    <div className="h-full">
      User Application
      <div className="flex h-full items-center justify-evenly">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            role={card.role}
            place={card.place}
            time={card.time}
            buttonName={card.buttonName}
          />
        ))}
      </div>
    </div>
  );
};

export default apply;
