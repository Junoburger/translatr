import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component {
state = {
    language: 'english'
};

onLanguageChange = (language) => {
    this.setState({ language: language});
}

render(){

    return (
        <div className="App ui container"> 
            <div>
                Select your language:
                <span style={{margin:'10px'}}>
                <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                </span>
            </div>
            <LanguageContext.Provider value={this.state.language}>
            <UserCreate/>
            </LanguageContext.Provider>
        </div>
    )
}




}


export default App;
