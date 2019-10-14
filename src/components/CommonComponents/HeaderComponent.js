import React, { Component } from 'react';
import '../../css/common.css';
//import jQuery from 'jquery'; //<-to import jqueryd
import 'bootstrap';

class HeaderComponent extends Component {
	constructor(props) {
			super(props);
		}
		logout = (e) =>
		{
			e.preventdefault();
		}
		render()
		{
			return (
					<div className="ui block header headerDivCls">
						<h3 className="headrTextCls">
						  Test Billing App
						</h3>
						<button className="ui red basic button logoutBtnCls" onClick={this.logout}>Logout</button>
					</div>
				);
		}
	}
	export default HeaderComponent