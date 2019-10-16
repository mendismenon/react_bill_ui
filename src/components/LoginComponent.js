import React, { Component } from 'react';
import '../css/LoginComponent.css';
import SignUpComponent from './SignUpComponent';
import ForgotPassComponent from './ForgotPassComponent';
import { Redirect } from 'react-router';

//let LoginComponent = () => {
class LoginComponent extends Component {
	 constructor(props) {
	    super(props);
	    this.state = {loadSignUp: 'NotLoad', signInAct: "btn active", signUpAct: "btn", 
	    	signInFrmCls: "form-signin", signUpFrmCls: "form-signup",forgtPassAct: "btn",
	    	frgtPassFrmCls: "form-forgtPass",loadFrgtPass: "NotLoad", frameClass: "frame",loginState: false};
	 }
	 renderSignUp = () => {
	   if(this.state.loadSignUp === "Loading" ||this.state.loadSignUp === "Loaded")
	   {
	      return <SignUpComponent/>;
	   }
	}
	renderFrgtPass = () => {
		if(this.state.loadFrgtPass === "Loading" ||this.state.loadFrgtPass === "Loaded")
	   {
	      return <ForgotPassComponent/>;
	   }
	}
	signInFn = () => {
		this.setState({
	        signInAct: "btn active", signUpAct: "btn", signInFrmCls: "form-signin", signUpFrmCls: "form-signup",
	        forgtPassAct: "btn",frgtPassFrmCls: "form-forgtPass",frameClass: "frame frame-short"
	    });
	}
	signUpFn = () => {
		if(this.state.loadSignUp === "NotLoad")
		{
			this.setState({
		        signInAct: "btn", signUpAct: "btn active", loadSignUp: "Loading", 
		        signInFrmCls: "form-signin form-signin-left", signUpFrmCls: "form-signup form-signup-left",
		        forgtPassAct: "btn",frgtPassFrmCls: "form-forgtPass",frameClass: "frame frame-long"
		    });
		}
		else
	    {
	    	this.setState({
		        signInAct: "btn", signUpAct: "btn active", signInFrmCls: "form-signin form-signin-left	", 
		        signUpFrmCls: "form-signup-left form-signup", forgtPassAct: "btn",frgtPassFrmCls: "form-forgtPass",
		        frameClass: "frame frame-long"
		    });
	    }
	}
	frgtPassLink = () => {
		if(this.state.loadFrgtPass === "NotLoad")
		{
			this.setState({
		        signInAct: "btn", signUpAct: "btn", loadFrgtPass: "Loading", 
		        signInFrmCls: "form-signin form-signin-left", signUpFrmCls: "form-signup",
		        frgtPassFrmCls: "form-forgtPass form-forgtPass-left", forgtPassAct: "btn active",
		        frameClass: "frame frame-short"
		    });
		}
		else
	    {
	    	this.setState({
		        signInAct: "btn", signUpAct: "btn", signInFrmCls: "form-signin form-signin-left	", 
		        signUpFrmCls: " form-signup", frgtPassFrmCls:"form-forgtPass form-forgtPass-left",
		        forgtPassAct: "btn active", frameClass: "frame frame-short"
		    });
	    }
	}
	signInFntcn = () => {
		console.log('in sign in');
		this.setState({loginState: true});
	}
  render() {
  	if(this.state.loginState)
    	{
    		return <Redirect to={{
	            pathname: '/Dashboard',
	            state: { id: '123' }
       		}} />
    	}
    	else {
    return (
	      <div className="container">
	        <div className={this.state.frameClass}>
	          <div className="nav">
	            <ul className="links">
	              <li className="signin-inactive signUpIn" onClick={this.signInFn}>
	              		<a className={this.state.signInAct}>Sign in</a>
					</li>
	              <li className="signup-inactive signUpIn" onClick={this.signUpFn}>
	              		<a className={this.state.signUpAct}>Sign up </a>
	              	</li>
	              	<li className="signup-inactive signUpIn" onClick={this.frgtPassLink}>
	              		<a className={this.state.forgtPassAct}>Forgot Password </a>
	              	</li>
	            </ul>
	          </div>
	          <div ng-init="checked = false">
	            <form className={this.state.signInFrmCls} method="post" name="form" id="signInFrm">
	              <label htmlFor="username">Username</label>
	              <input className="form-styling" type="text" name="username" placeholder={"Username"} />
	              <label htmlFor="password">Password</label>
	              <input className="form-styling" type="text" name="password" placeholder={"Password"} />
	             { /* <input type="checkbox" id="checkbox" />
	              <label htmlFor="checkbox"><span className="ui" />Keep me signed in</label> */}
	              <div className="btn-animate">
	                <a className="btn-signin" onClick={this.signInFntcn}>
	                	Sign in
	                </a>
	              </div>
	            </form>
	            <form className={this.state.signUpFrmCls} method="post" name="form" id="signUpFrm">
	            {
	            	this.renderSignUp()
	            }
	            </form>
	            <form className={this.state.frgtPassFrmCls} method="post" name="form" id="signUpFrm">
	            {
	            	this.renderFrgtPass()
	            }
	            </form>
	          </div>
	          {/*<div className="forgot">
	            <a href="#">Forgot your password?</a>
	          </div>*/}
	        </div>
	      </div>
	  
    );
	}
 } 

}
export default LoginComponent;