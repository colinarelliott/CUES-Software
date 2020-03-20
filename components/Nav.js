import Link from 'next/link'

const Nav = () => (
    <div>
            <ul>
                <li>
                    <Link href="/inv"><a>Inventory</a></Link>
                </li>
                <li>
                    <Link href="/cal"><a>Calendar</a></Link>
                </li>
                <li>
                    <Link href="/ppl"><a>People</a></Link>
                </li>
                <li>
                    <Link href="/evt"><a>Events</a></Link>
                </li>
            </ul>
    </div>
);

export default Nav;