import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <Link to="/chart">차트</Link>
      <Link to="/Whook">Whook</Link>
      <Link to="/event">이벤트</Link>
      <Link to="/news">뉴스</Link>
      <Link to="/store">스토어</Link>
    </>
  );
};
