import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
            <h1>{props.Header}</h1>
            <p1>{props.Info}</p1>
        </div>
    );
}

const WithAdditionalInfo = (WrappedComponent) => {
    return (props) => {
        return(
        <div>
            <WrappedComponent {...props}/>
            {props.isAuthenticated && <h1>React Training</h1>}
        </div>
        );
    };
}

const WarningInfo = WithAdditionalInfo(Info);

ReactDOM.render(<WarningInfo Header='HOC Test' Info='This is to test HOC' isAuthenticated={false}/>, document.getElementById('app'));
