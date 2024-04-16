import { Link } from "react-router-dom";

const links = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "About", link: "/about" },
  { id: 3, text: "contact", link: "/contact" },
];
const Navlinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className="px-3 py-2 hover:bg-base-content hover:text-white rounded"
            key={link.id}
            to={link.link}
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
};

export default Navlinks;
