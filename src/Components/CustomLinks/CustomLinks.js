import React from 'react';
import "./CustomLinks.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link style={{ color: match ? "red" : "black", fontWeight: match ? "bold" : "normal" }} className={match ? "nav-active" : ""} {...props} to={resolved.pathname}>
                {children}
            </Link>
            {match && " (active)"}

        </div>
    );
};
