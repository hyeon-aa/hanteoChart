type ContentBoxProps = {
  img: string;
  content: string;
};

export const ContentBox = ({ img, content }: ContentBoxProps) => {
  return (
    <>
      <div className="relative flex items-center px-4 py-2 ">
        <div className="w-20 h-15 bg-gray-400 rounded-md z-10">
          <img src={img} className=""></img>
        </div>
        <div className="absolute left-15 h-15 w-[80%] bg-white border border-gray-100 rounded-md text-center justify-center items-center">
          {content}
        </div>
      </div>
    </>
  );
};
