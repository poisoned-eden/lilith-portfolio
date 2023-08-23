import React from 'react';
// TODO replace this with my own logo
// import logo from '../logo.svg';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Lilith Miller-Fermor</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}
