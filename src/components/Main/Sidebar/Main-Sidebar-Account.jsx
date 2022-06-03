import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "./../../../redux/loginReducer"

class SidebarAccount extends Component {

    logout = () => {
        this.props.logout();
    }

    render() {
    return (
        <div className='newfeeds'>
            <div className='newfeeds__title'>Account</div>
            <nav className='newfeeds__menu'>
                <ul className='newfeeds__list'>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-radiotest'>
                            </i>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-star_outlinetest'>
                            </i>
                            <span>Settings Analytics</span>
                        </a>
                    </li>
                    <li>
                        <button className='newfeeds__link'  onClick={this.logout} >
                            <i className='icon-languagetest'>
                            </i>
                            <span  >Выход</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )}
};




export default connect( null, {  logout })(SidebarAccount)
