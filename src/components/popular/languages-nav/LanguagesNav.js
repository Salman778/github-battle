import React from 'react';
import PropTypes from 'prop-types'
import './LanguagesNav.css';


const languages = ['All', 'JavaScript', 'Ruby', 'Python']

function LanguagesNav(props) {
    const languagesList = languages.map((language, index) => (
        <li key={index}>
            <button 
            className='btn-clear nav-link'
            style={language === props.language ? {color: 'red'} : null}
            onClick={() => props.updateLanguageHandler(language)}
            >
                {language}
            </button>
        </li>
    ));
    return (
        <ul className="flex-center">
            {languagesList}
        </ul>
    )
}

LanguagesNav.prototype = {
    language: PropTypes.string.isRequired,
    updateLanguageHandler: PropTypes.func.isRequired
}


export default LanguagesNav;