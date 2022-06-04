import { connect } from "react-redux";
import { logout } from "./../../../redux/loginReducer";

let SidebarAccount = (props) => {

    let logout = () => {
        props.logout();
    }


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
                        <button className='newfeeds__link'  onClick={logout} >
                            <i className='icon-languagetest'>
                            </i>
                            <span  >Выход</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};




export default connect( null, {  logout })(SidebarAccount)
