type ChipProps = {
  label: string;
};

export const Chip = ({ label }: ChipProps) => {
  return (
    <>
      <div className="bg-pink-500 text-white px-2 py-1 rounded-full">
        {label}
      </div>
    </>
  );
};
