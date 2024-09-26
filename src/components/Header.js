const Header = (props) => {
  const logo = "images/images/logo.png";
  return (
    <header>
      <div className="holder">
        <img src={logo} width={100} alt="Transportes X" />
        <h1> Header Página de Transportes X</h1>
      </div>
    </header>
  );
};

export default Header;
