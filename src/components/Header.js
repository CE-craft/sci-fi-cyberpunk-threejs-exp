import Link from "../components/Link";

const Header = () => {
  return (
    <>
      <p className="logo">Cyberpunk header</p>
      <Link link={`#`} linkName={"Cart"} />
      <Link link={`#`} linkName={"Menu"} />
    </>
  );
};

export default Header;
