import React from 'react';

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            displayName: ""
        };
    }

    handleInputChange = (event) => {
        //debugger;
        this.setState({
           [event.target.name]: event.target.value   
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let displayName = this.state.displayName;
        // startUsernamelessEnrolment({username, displayName})
        //     .then((serverResponse) => {
        //         if(serverResponse.status !== 'startFIDOEnrolmentRK')
        //             throw new Error('Error registering user! Server returned: ' + serverResponse.errorMessage);
        //         return getMakeCredentialChallenge()
        //     })
        //     .then((makeCredChallenge) => {
        //         makeCredChallenge = preformatMakeCredReq(makeCredChallenge);
        //         return navigator.credentials.create({ 'publicKey': makeCredChallenge })
        //     })
        //     .then((newCredentialInfo) => {
        //         newCredentialInfo = publicKeyCredentialToJSON(newCredentialInfo)
        //         return makeCredentialResponse(newCredentialInfo)
        //     })
        //     .then((serverResponse) => {
        //         if(serverResponse.status !== 'ok')
        //             throw new Error('Error registering user! Server returned: ' + serverResponse.errorMessage);
        //         alert('Success!');
        //     })
        //     .catch((error) => {
        //         alert('FAIL' + error)
        //         console.log('FAIL', error)
        //     })

    }

    //TODO: impleemnt production compatible code per warning in server.sample.js
    startUserEnrollment = (payload) => {
     
            session = {};
            if(db.userExists(payload.username) && db.getUser(payload.username).registrationComplete)
                return Promise.reject({'status': 'failed', 'errorMessage': 'User already exists!'})
    
            db.deleteUser(payload.username)
    
            payload.id = base64url.encode(generateRandomBuffer(32));
            payload.credentials = [];
    
            db.addUser(payload.username, payload)
    
            session.username = payload.username;
            session.rk = true;
    
            return Promise.resolve({'status': 'startFIDOEnrolmentRK'})
        
    }

    render() {
        const username = this.state.username;
        const displayName = this.state.displayName;
        return (
            <form id="register" onSubmit={this.handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} value={username} /><br />
                <input type="text" name="displayName" placeholder="DisplayName" onChange={this.handleInputChange} value={displayName} /><br />
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        );
    }
}