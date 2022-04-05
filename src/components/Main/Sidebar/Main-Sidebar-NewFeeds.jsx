let SidedarNewFeeds = () => {
    return (
        <div className='newfeeds'>
            <div className='newfeeds__title'>New Feeds</div>
            <nav className='newfeeds__menu'>
                <ul className='newfeeds__list'>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-radiotest'>
                            </i>
                            <span>Newsfeed</span>
                        </a>
                    </li>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-star_outlinetest'>
                            </i>
                            <span>Badges</span>
                        </a>
                    </li>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-languagetest'>
                            </i>
                            <span>Explore Stories</span>
                        </a>
                    </li>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-bubble_charttest'>
                            </i>
                            <span>Popular Groups</span>
                        </a>
                    </li>
                    <li>
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-facetest'>
                            </i>
                            <span>Author Profile </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
};

export default SidedarNewFeeds;
