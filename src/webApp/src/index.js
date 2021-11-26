import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.scss';
import Main from './App';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

ReactDOM.render(<AppComponent />, 
    document.getElementById('app'));