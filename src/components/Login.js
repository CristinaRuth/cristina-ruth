import React from 'react';

export class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // document.getElementById('login').addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     return getGetAssertionChallenge()
        //         .then((getAssertionChallenge) => {
        //             getAssertionChallenge = preformatGetAssertReq(getAssertionChallenge);
        //             return navigator.credentials.get({ 'publicKey': getAssertionChallenge })
        //         })
        //         .then((newCredentialInfo) => {
        //             newCredentialInfo = publicKeyCredentialToJSON(newCredentialInfo)
        //             return getAssertionResponse(newCredentialInfo)
        //         })
        //         .then((serverResponse) => {
        //             if(serverResponse.status !== 'ok')
        //                 throw new Error('Error registering user! Server returned: ' + serverResponse.errorMessage);
        //             alert('Success!');
        //         })
        //         .catch((error) => {
        //             alert('FAIL' + error)
        //             console.log('FAIL', error)
        //         })
        // })
    }

    render() {
        return (
            <React.Fragment>
                <div >
                    <h4>Login</h4>
                    <div>
                        <form id="login" onSubmit={this.handleSubmit}>
                            <button className="btn btn-primary" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
