interface props {
  children: string;
}

const mappings: Record<string, string> = {
  "Next.js": "bg-[#000000] text-white",
  TailwindCSS: "bg-[#38BDF8]",
  TypeScript: "bg-[#3178C6]",
  "No Show": "bg-starlight-red",
  Completed: "bg-starlight-teal",
};

const Tag = ({ children }: props) => {
  return (
    <div
      className={`${mappings[children]} rounded-md px-3 py-1 text-center font-semibold text-white`}
    >
      {children}
    </div>
  );
};

export default Tag;
