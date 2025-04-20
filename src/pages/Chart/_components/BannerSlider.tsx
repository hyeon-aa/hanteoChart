import Slider from "react-slick";
import { Chip } from "./Chip";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";

export const BannerSlider = () => {
  const banners = [
    {
      title: "[M COUNTDOWN] 10월 2주차 엠카 사전 투표",
      period: "2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)",
      imgUrl: "/bannerImg1.png",
      label: "진행중",
      link: "https://naver.com",
    },
    {
      title: "2번째 title",
      period: "2025.02.08 10:00 ~ 2025.04.08 17:00 (KST)",
      imgUrl: "/bannerImg2.png",
      label: "진행완료",
      link: "https://naver.com",
    },
    {
      title: "3번째 title",
      period: "2025.06.08 10:00 ~ 2025.06.08 17:00 (KST)",
      imgUrl: "/bannerImg3.png",
      label: "예정",
      link: "https://naver.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  const navigate = useNavigate();

  const handleMovetoVote = () => {
    navigate("/vote");
  };

  const handleMovetoLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="w-full pb-6 px-2">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative px-2">
              <div className="relative bg-white rounded-lg">
                <img
                  onClick={() => handleMovetoLink(banner.link)}
                  className="w-full max-h-[200px] rounded-lg"
                  src={banner.imgUrl}
                ></img>
              </div>
              <div>
                <Chip
                  className="absolute top-2 ml-2 left-2 z-10"
                  label={banner.label}
                ></Chip>
                <div className="px-3 py-2 bg-white">
                  <div className="flex justify-between">
                    <div className="font-bold text-md mb-1">
                      {banner.title.length > 20
                        ? banner.title.substring(0, 20) + "..."
                        : banner.title}
                    </div>
                    <Button label="투표하기" onClick={handleMovetoVote} />
                  </div>
                  <div className="text-right text-sm text-gray-500 mb-1">
                    {banner.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
