function Header(icon, title) {
  return (
    <div className="header">
      <img src={icon} alt="icon"></img>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
