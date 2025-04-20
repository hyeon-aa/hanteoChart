import { useEffect, useRef, useState } from "react";
import { ContentBox } from "./_components/ContentBox";
import { BannerSlider } from "./_components/BannerSlider";

const initialContentList = [
  { img: "/bannerImg1.png", content: "content1" },
  { img: "/bannerImg2.png", content: "content2" },
  { img: "/bannerImg3.png", content: "content3" },
  { img: "/bannerImg1.png", content: "content4" },
  { img: "/bannerImg2.png", content: "content5" },
  { img: "/bannerImg3.png", content: "content6" },
  { img: "/bannerImg1.png", content: "content7" },
  { img: "/bannerImg2.png", content: "content8" },
  { img: "/bannerImg3.png", content: "content9" },
  { img: "/bannerImg1.png", content: "content10" },
  { img: "/bannerImg2.png", content: "content11" },
  { img: "/bannerImg3.png", content: "content12" },
  { img: "/bannerImg1.png", content: "content13" },
  { img: "/bannerImg2.png", content: "content14" },
  { img: "/bannerImg2.png", content: "content15" },
  { img: "/bannerImg2.png", content: "content16" },
  { img: "/bannerImg2.png", content: "content17" },
  { img: "/bannerImg2.png", content: "content18" },
];

export const Chart = () => {
  const targetRef = useRef(null);
  const [contentList, setContentList] = useState(
    initialContentList.slice(0, 6)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("isIntersecting");
            loadMoreContent();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const pageRef = useRef(1);

  const loadMoreContent = () => {
    const itemsPerPage = 3;
    const nextPage = pageRef.current + 1;

    const startIdx = nextPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    if (startIdx >= initialContentList.length) return;

    const newContent = initialContentList.slice(startIdx, endIdx);

    setContentList((prev) => [...prev, ...newContent]);
    pageRef.current = nextPage;
  };

  return (
    <>
      <BannerSlider />
      <div className="h-[400px] overflow-y-scroll">
        {contentList.map((content, index) => (
          <ContentBox key={index} img={content.img} content={content.content} />
        ))}
        <div className="mb-[400px]">
          <div ref={targetRef} className="h-[200px]"></div>
        </div>
      </div>
    </>
  );
};
