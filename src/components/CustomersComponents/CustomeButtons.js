import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import InfoComponent from '../CommonComponents/InfoComponent';

class CustomeButtons extends Component {
	constructor(props) {
			super(props);
			this.state = {"columnData":[],"tableData":{},fixedAlignment:false,checkBoxData:[false,false,false],
			showModal:false}
			console.log("in TableComponent props :: "+JSON.stringify(props));
	}
	deleteCustomer = () =>
	{
		
	}
	render(){
		return(

			<div className="fltLft">
			<button className="ui button" onClick={this.deleteCustomer}>
			    <i className="trash icon"></i>
			    Delete
			</button>
			<button className="ui button">
			    <i className="plus icon"></i>
			    Add New
			</button>
			<button className="ui button">
			    <i className="upload icon"></i>
			    Import Company/Customer
			</button>
			<InfoComponent openClose={this.state.showModal} compType="E" mainHead="Error" content="Not able to find"/>
			</div>	
		)
	}
}
export default CustomeButtons