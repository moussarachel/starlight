type props = {
  children: React.ReactNode;
};

const Protected = ({ children }: props) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
};

export default Protected;
