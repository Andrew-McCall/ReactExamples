const Header = () => {
    return(
    <header>
        <nav className = "navbar navbar-expand-sm">

            <a
                className="nav-brand"
                href="https://www.qa.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <img alt="logo" src="https://i.imgur.com/smguoM3.png" width="100" />  
            </a>

            <a href="/" className="navbar-brand">
                ToDo App
            </a>
        </nav>
    </header>
    );
}

export default Header;