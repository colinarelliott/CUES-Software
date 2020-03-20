import Link from 'next/link'

const Nav = () => (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link href="/"><a className="navbar-brand"><b>CUES</b></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/inv"><a className="nav-link">Inventory</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/cal"><a className="nav-link">Calendar</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/ppl"><a className="nav-link">People</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/evt"><a className="nav-link">Events</a></Link>
                </li>
            </ul>
        </div>
    </nav>
    <style jsx>{`
        
    `}</style>
    </div>
);

export default Nav;