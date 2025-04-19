import { BannerSlider } from "./_components/BannerSlider";
import { ContentBox } from "./_components/ContentBox";

export const Chart = () => {
  const contentList = [
    { img: "1", content: "content1" },
    { img: "2", content: "content2" },
    { img: "3", content: "content3" },
    { img: "4", content: "content4" },
    { img: "5", content: "content5" },
    { img: "6", content: "content6" },
    { img: "7", content: "content7" },
    { img: "8", content: "content8" },
    { img: "9", content: "content9" },
    { img: "10", content: "content10" },
    { img: "11", content: "content11" },
    { img: "12", content: "content12" },
    { img: "13", content: "content13" },
    { img: "14", content: "content14" },
  ];

  return (
    <>
      <BannerSlider></BannerSlider>
      {contentList.map((content) => {
        return (
          <ContentBox img={content.img} content={content.content}></ContentBox>
        );
      })}
    </>
  );
};
