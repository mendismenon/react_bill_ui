import React, { Component } from 'react';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import TableComponent from '../CommonComponents/TableComponent';
import SubIconHeaderComponent from '../CommonComponents/SubIconHeaderComponent';
import { Button, Select, Input, Icon } from 'semantic-ui-react'
import SearchInputComponent from './SearchInputComponent';
import CustomerTableComponent from './CustomerTableComponent';

class CustomersComponent extends Component {	
	constructor(props) {
		console.log('in cust');
	 	super(props);
	 	this.state = {"showList":"No", "menuDetails":{"parentClass":"ui compact vertical labeled icon menu menuContents"}}
	}
	render(){
	 	return(
	 		<React.Fragment>
				<HeaderComponent />
				<div>
					<MenuComponent activeClass="Customers" menuDetails={this.state.menuDetails}/>
				</div>
				<div>
					<div className="searchCustCls_CustCmp_Parent">
						<div className="searchCustCls_CustCmp">
							<SubIconHeaderComponent icon="search" content="Search Customer / Vendor"/>
						</div>
						<div>
							<SearchInputComponent />
							 <Button icon labelPosition='right'>
						      Show All Data
						      <Icon name='right arrow' />
						    </Button>
					    </div>
					</div>
					<div className="searchCustCls_CustCmp_Parent martop20Per">
					<div className="tableParentCls_custComp">
				    	<div className="searchCustCls_CustCmp">
							<SubIconHeaderComponent icon="search" content="Customer / Vendor List"/>
						</div>
				    	<div>
						<CustomerTableComponent />
						</div>
					</div>
					</div>
				</div>
				{/*<TableComponent tableDataProps={this.state.customerDetails}/>*/}
			</React.Fragment>
	 	);
	 }
}
export default CustomersComponent