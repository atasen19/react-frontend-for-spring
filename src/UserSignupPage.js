import React from "react";

class UserSignupPage extends React.Component{

    state = {
        username: null,
        agreedClicked: false,
        password: null,
        passwordRepeat: null
    }

    // onChangeUserName = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // onChangeDisplayName = (event) => {
    //     this.setState({
    //         displayName: event.target.value
    //     })
    // }

    // onChangeAgree = (event) => {
    //     this.setState({
    //         agreedClicked: event.target.checked
    //     })
    // }

    // onChangePassword = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    // onChangePasswordRepeat = (event) => {
    //     this.setState({
    //         passwordRepeat: event.target.value
    //     })
    // }

    onChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
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
                    <input name="displayName" onChange={this.onChange}>
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
                    <label>Agreed</label>
                    <input type="checkbox" onChange={this.onChange}></input>
                </div>
                <div>
                    <button disabled={!this.state.agreedClicked} >Sign Up</button>
                </div>
            </form>
        )
    }
}

export default UserSignupPage

// class tipinde componentler statefull component oluyor