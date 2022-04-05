let SidebarAccount = () => {
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
                        <a className='newfeeds__link' href='/#'>
                            <i className='icon-languagetest'>
                            </i>
                            <span>Chat</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default SidebarAccount;
