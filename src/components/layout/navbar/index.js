import React from 'react';
import './style.css'
class Navbar extends React.Component {
    nav = [
        { name: "Link", link: "/Link", key: 1 },
        { name: "Link", link: "/Link", key: 2 },
        { name: "Link", link: "/Link", key: 3 },
        { name: "Link", link: "/Link", key: 4 },
    ]
    render() {
        return (
            <div className="container-fluid nav">
                <div className="container navbar">
                    <a className="navbar__logo" href="#">LOGO</a>
                    <div className="navbar__container">
                        <div className="navbar__wrapper">

                            {this.nav.map(nav => (
                                <div >
                                    <a key={nav.key} href={nav.link} className="navbar__item">{nav.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar