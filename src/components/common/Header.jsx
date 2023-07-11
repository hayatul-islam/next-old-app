import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //   scroll bg color change
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define an array of menu items and their corresponding routes
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Top Stores", route: "/top-stores" },
    { name: "Option", route: "/option" },
    { name: "World News", route: "/world-news" },
    { name: "Us News", route: "/us-news" },
  ];

  return (
    <nav
      style={{
        backgroundColor: scrollPosition > 0 ? "#1E1E1E" : "transparent",
      }}
      className="fixed w-full transition z-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-2 ">
        <div
          className={`flex items-center justify-between h-16 ${
            scrollPosition === 0 && "border-b"
          }  border-primary`}
        >
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 text-white">
              <span className="font-bold text-3xl font-primary">
                Relight news
              </span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-12">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item?.route}
                  className={`text-white uppercase ${
                    router.pathname === item.route ? "font-bold" : ""
                  }`}
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute w-full top-0 h-[100vh] bg-[#161616] p-4">
          <div className="flex justify-end">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item?.route}
                className={`text-white block text-[22px] p-3 border-b border-[#232323] uppercase ${
                  router.pathname === item.route ? "font-semibold" : ""
                }`}
              >
                {item?.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
