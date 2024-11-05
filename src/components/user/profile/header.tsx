import { Mail } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Projects from "./projects";
import Link from "next/link";

interface HeaderProps {
  name: string;
  email: string;
  github: string;
  discord: string;
  status: string;
  profile: StaticImageData;
  projects: string[];
}

const Header = ({
  name,
  email,
  github,
  discord,
  status,
  profile,
  projects,
}: HeaderProps) => {
  return (
    <div className="mb-10 mt-7 flex max-w-full flex-row items-center gap-5 overflow-hidden">
      <Image
        src={profile}
        alt="profile picture"
        width={150}
        height={150}
        className="rounded-xl"
      />
      <div className="flex max-h-full w-full max-w-full flex-col gap-1">
        <p className="text-3xl font-bold">{name}</p>

        <div className="flex items-center">
          <Link
            href={`mailto:${email}`}
            className="text-starlight-gray"
            target="_blank"
          >
            <Mail className="inline-block h-5 w-5 text-starlight-gray" />
            <span className="ml-2">{email}</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`https://github.com/${github}`}
            className="text-starlight-gray"
            target="_blank"
          >
            <FaGithub className="inline h-5 w-5 text-starlight-gray" />
            <span className="ml-2">{github}</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`https://discord.com/users/${discord}`}
            className="text-starlight-gray"
            target="_blank"
          >
            <FaDiscord className="inline-block h-5 w-5 text-starlight-gray" />
            <span className="ml-2">{discord}</span>
          </Link>
        </div>
        <div className="flex max-w-full items-center">
          <p className="rounded-md bg-starlight-blue px-7 py-1.5 text-sm font-bold text-white">
            {status}
          </p>
          <div className="mx-4 h-8 border-l-2 border-starlight-lightgray" />
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Header;
