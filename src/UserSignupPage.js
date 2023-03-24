import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component{

    state = {
        username: null,
        displayname: null,
        password: null,
        passwordRepeat: null
    }

    onChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    onClickSignup = event => {
        event.preventDefault();

        const {username, displayname, password} = this.state;
        const body = {
            username,
            displayname,
            password
        }

        axios.post('/api/v1/users', body)
    }

    render(){
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange}>
                    </input>
                </div>
                <div>
                    <label>Display Name</label>
                    <input name="displayname" onChange={this.onChange}>
                    </input>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.onChange}>
                    </input>
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input name="passwordRepeat" type="password" onChange={this.onChange}>
                    </input>
                </div>
                <div>
                    <button onClick={this.onClickSignup} >Sign Up</button>
                </div>
            </form>
        )
    }
}

export default UserSignupPage

// class tipinde componentler statefull component oluyor