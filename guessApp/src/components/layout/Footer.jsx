const Footer = () => {
//use the JS Date class
const date = new Date();

  return (
  <footer className="bg-info container-fluid">
    <p className="py-5 text-white text-end">
      Copyright {String.fromCharCode(169)}
      {' ' + date.getFullYear()} Guessing Game
    </p>
    </footer>
  )
};

export default Footer;