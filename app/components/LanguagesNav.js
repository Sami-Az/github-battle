import React from 'react';

const LanguagesNav  = ({selected, onUpdateLangage}) => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Pyphon']
    return (
      <ul className="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button 
              className="btn-clear nav-link"
              style={language === selected ? {color: 'pink' }: null}
              onClick={() => onUpdateLangage(language)}
            >
                {language}
            </button>
          </li>
        ))}
      </ul>
    )
}

export default LanguagesNav
