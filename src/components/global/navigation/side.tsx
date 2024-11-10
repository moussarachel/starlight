import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";

interface link {
  name: string;
  link: string;
}

interface props {
  links: link[];
}

const SideNav = ({ links }: props) => {
  return (
    <nav className="flex h-screen w-[10%] flex-col items-center bg-starlight-blue text-white">
      <Image src={Logo} alt="Starlight Logo" />

      <div className="flex w-full flex-col text-center">
        {links.map(({ link, name }, index) => (
          <Link
            key={index}
            href={link}
            className="!w-full hover:bg-starlight-yellow hover:text-black"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
