import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();

  const menus = [
    { to: "/chart", label: "차트" },
    { to: "/Whook", label: "Whook" },
    { to: "/event", label: "이벤트" },
    { to: "/news", label: "뉴스" },
    { to: "/store", label: "스토어" },
    { to: "/charge", label: "충전소" },
  ];

  return (
    <div className="sticky top-0 bg-pink-300 mb-4">
      <ul className="flex justify-between text-sm font-medium text-gray-700 px-4">
        {menus.map((menu) => {
          const isActive = location.pathname === menu.to;
          return (
            <li key={menu.label} className="flex-1 text-center py-2">
              <Link
                to={menu.to}
                className={`pb-1 ${
                  isActive ? "text-white font-bold" : "text-black font-bold"
                }`}
              >
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
