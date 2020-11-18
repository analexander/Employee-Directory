import React from 'react';
import SearchBox from './SearchBox';

function Nav( { handleSearchChange} ) {
    return (
        <nav className='navbar nabvar-expand navbar-dark bg-dark'>
            <div className='navbar-collapse row' id='navbarNav'>
                <SearchBox handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    )
}

export default Nav;