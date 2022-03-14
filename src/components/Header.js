const Header = () => {
  return (
    <header className = "header">
        <img src={process.env.PUBLIC_URL+"media/Scapay.png"} className="img" alt="logo"/>
    </header>
  )
}

export default Header