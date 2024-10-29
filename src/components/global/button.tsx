"use client";

interface ButtonProps {
  children: string | number;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-md bg-starlight-blue px-8 py-2 font-serif text-white hover:opacity-80"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
