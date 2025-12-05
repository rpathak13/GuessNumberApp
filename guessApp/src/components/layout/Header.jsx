const Header = ({ branding }) => {
  return (
    <nav className="nav bg-info py-5 text-white text-center fs-1">
      <div className="container-fluid">
        <span className="navbar-brand text-white">{branding}</span>
      </div>
    </nav>
  );
};

export default Header;
