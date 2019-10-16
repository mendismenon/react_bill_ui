import React, { Component } from 'react';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';
import TableComponent from '../CommonComponents/TableComponent';
import {InventoryOptionFn} from './InventoryOptions';
import {invoiceOptFn} from './InvoiceOption';
import {loadUserDtlsFn} from './UserDetails';
import {loadOrgnisationDtlsFn} from './OrganisationDetails';
import {productOptFn} from './ProductOpt';

class SettingComponents extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {"orgnisationDtls":{},"menuDetails":{"parentClass":"ui compact vertical labeled icon menu setngMenuContents"},
	 		userDtls:{},invoiceOpt:{},inventryOpt:{},productOpt:{}}
	 }
	 loadAllDetails = () => {
	 	let lprodtDtls = productOptFn();
	 	let lorgDtls = loadOrgnisationDtlsFn();
	 	let lusrDtls = loadUserDtlsFn();
	 	let linvoiceOpt = invoiceOptFn();
	 	let linventryOpt = InventoryOptionFn();
	 	this.setState({orgnisationDtls:lorgDtls,userDtls:lusrDtls,invoiceOpt:linvoiceOpt,inventryOpt:linventryOpt,productOpt:lprodtDtls})
	 }
	 componentWillMount()
	 {
	 	this.loadAllDetails();
	 }
	 render(){
	 	return(
	 		<React.Fragment>
				<HeaderComponent />
				<div>
					<MenuComponent activeClass="Setting" menuDetails={this.state.menuDetails}/>
				</div>
				<div>
				</div>
				<TableComponent tableDataProps={this.state.orgnisationDtls}/>
				<TableComponent tableDataProps={this.state.userDtls}/>
				<TableComponent tableDataProps={this.state.invoiceOpt}/>
				<TableComponent tableDataProps={this.state.inventryOpt}/>
				<TableComponent tableDataProps={this.state.productOpt}/>
			</React.Fragment>
	 	);
	 }
}
export default SettingComponents