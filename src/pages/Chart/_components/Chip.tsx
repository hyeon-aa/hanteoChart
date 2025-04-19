type ChipProps = {
  label: string;
  className?: string;
};

export const Chip = ({ label, className }: ChipProps) => {
  return (
    <>
      <span
        className={`bg-pink-500 font-bold text-white px-2 py-0.5 rounded-lg ${className}`}
      >
        {label}
      </span>
    </>
  );
};
