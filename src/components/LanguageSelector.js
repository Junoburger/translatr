import React from 'react';
import LanguageContext from '../contexts/LanguageContext';





class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {

        return (
            <div>
                Select your language:
                <span style={{margin:'10px'}}>
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}/>
                </span>
            </div>
        );

    }




}

export default LanguageSelector;
