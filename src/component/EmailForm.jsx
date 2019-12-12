import React from 'react';

import './EmailForm.css'

const isEmailValid = (email) => email.length > 4

class EmailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailValid: false,
            emailMessage : "L'email doit etre renseigné",
            password: '',
            passwordConfirmation: '',
            passwordValid: false,
            passwordMessage: ''
        }
    }

    submited = (event) => {
        alert(`Le formulaire a été soumis avec l'email ${this.state.email}`);
        event.preventDefault();
    }

    emailChanged = (newEmail) => {
        this.setState({email : newEmail, emailValid: newEmail.length})
    }

    passwordChanged = (newPassword) => {
        const newPasswordValid = isEmailValid(newPassword);
        const confirmationValid = this.state.passwordConfirmation === newPassword;
        this.setState({
            password : newPassword, 
            passwordValid:newPasswordValid && confirmationValid})
        if(!newPasswordValid) {
            this.setState({passwordMessage : 'Le mot de passe doit comporter au moins 4 caracteres'})
        }
        if(!confirmationValid) {
            this.setState({passwordMessage : 'Les mot ne sont pas identiques'})
        }
    }

    confirmationChanged = (newConfirmation) => {
        this.setState({passwordConfirmation : newConfirmation, passwordValid :this.state.password === newConfirmation})
        if(this.state.password !== newConfirmation ) {
            this.setState({passwordValid : false, passwordMessage : 'Les mot ne sont pas identiques'})
        }
    }

    isValid = () => this.state.emailValid && this.state.passwordValid


    render = () => (
        <form onSubmit={this.submited} className={'EmailForm'}>
            <label> Email :
                <input
                    type='email'
                    value={this.state.email}
                    onChange={(event) => this.emailChanged(event.target.value)}
                />
                {!this.state.emailValid && (<span>{this.state.emailMessage}</span>)}
            </label>
            <label> Mot de passe :
                <input
                    type='password'
                    value={this.state.password}
                    onChange={(event) => this.passwordChanged(event.target.value)}
                />
                {!this.state.passwordValid && (<span>{this.state.passwordMessage}</span>)}
            </label>
            <label> Confirmation du mot de passe :
                <input
                    type='password'
                    value={this.state.passwordConfirmation}
                    onChange={(event) => this.confirmationChanged(event.target.value)}
                />
            </label>
            <input type='submit' value="Envoyer" disabled={!this.isValid()}/>
        </form>
    )

}

export default EmailForm;

