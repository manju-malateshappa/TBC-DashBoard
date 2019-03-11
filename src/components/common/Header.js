import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/activities" activeClassName="active">Activities</Link>
            {" | "}
            <Link to="/courses" activeClassName="active">Your Story</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;
