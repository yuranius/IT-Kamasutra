import { connect } from "react-redux";
import { NavLink } from "react-router-dom";



let SidedarNewFeeds = (props) => {
    return (
        <div className='newfeeds'>
            <div className='newfeeds__title'>New Feeds</div>
            <nav className='newfeeds__menu'>
                <ul className='newfeeds__list'>
                    <li>
                        <NavLink className='newfeeds__link' to='/newsfeed'>
                        {/***^ activeClassName - при добавлении классов из пропсов то нужно добавить отдельный класс для понимания*/}
                            <i className='icon-radiotest'>
                            </i>
                            <span>Newsfee</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='newfeeds__link' to='/badges'>
                            <i className='icon-star_outlinetest'>
                            </i>
                            <span>Badges</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='newfeeds__link' to='/findusers'>
                            <i className='icon-languagetest'>
                            </i>
                            <span>Find users</span>
                        {/* Explore Stories */}
                        </NavLink>
                    </li>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-bubble_charttest'>
                            </i>
                            <span>Popular Groups</span>
                        </a>
                    </li>
                    <li>
                        <NavLink className='newfeeds__link' to='/profile'>
                            <i className='icon-facetest'>
                            </i>
                            <span>Author Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
};



export default  SidedarNewFeeds;
