type ButtonProps = {
  onClick: () => void;
  label: string;
};

export const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-pink-500 border border-pink-500 text-sm px-2 py-1 rounded-md"
    >
      {label}
    </button>
  );
};
