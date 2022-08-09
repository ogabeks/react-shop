function Footer(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
                <div className="container">
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            © Copyright, {new Date().getFullYear()}
                            </a>
                        </li>
                    </ul>    
                </div>
            </nav>
        </>
    )
}

export {Footer};