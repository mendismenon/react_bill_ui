import React, { Component } from 'react';
import MenuComponent from '../CommonComponents/MenuComponent';
import HeaderComponent from '../CommonComponents/HeaderComponent';

import TableComponent from '../CommonComponents/TableComponent';

class SettingComponents extends Component {
	constructor(props) {
	 	super(props);
	 	this.state = {"orgnisationDtls":{},"menuDetails":{"parentClass":"ui compact vertical labeled icon menu setngMenuContents"},
	 		userDtls:{},invoiceOpt:{}}
	 }
	 loadAllDetails = () => {
	 	let lorgDtls = this.loadOrgnisationDtlsFn();
	 	let lusrDtls = this.loadUserDtlsFn();
	 	let linvoiceOpt = this.invoiceOptFn();
	 	this.setState({orgnisationDtls:lorgDtls,userDtls:lusrDtls,invoiceOpt:linvoiceOpt})
	 }
	 invoiceOptFn = () => {
	 	let linvoiceOpt = {};
	 	linvoiceOpt.pagination = true;
	 	linvoiceOpt.tableTitle = "Invoice Options";
	 	linvoiceOpt.page = true;
	 	linvoiceOpt.parentCls = "OrgTblContentCls";
	 	linvoiceOpt.size = 10;
	 	linvoiceOpt.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["Bank Name","Bank IFSC","Account Number","Branch Name","VPA","Action"];
	 	let ltableheadAcces = ["bankName","bankIFSC","accNum","branchName","VPA","action"];
	 	linvoiceOpt.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		linvoiceOpt.data.TableDtls.head[i] = {};
	 		linvoiceOpt.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		linvoiceOpt.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		linvoiceOpt.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		linvoiceOpt.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			linvoiceOpt.data.TableDtls.head[i].id = 'click-me-button';
  				linvoiceOpt.data.TableDtls.head[i].render = ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>);
  				linvoiceOpt.data.TableDtls.head[i].Cell= (props) => <button onClick={(e) => this.handleButtonClick(e)}>Edit </button>
  			}
	 	}
	 	linvoiceOpt.data.TableDtls.data = [];
	 	for(let i=0;i<1;i++)
	 	{
	 		linvoiceOpt.data.TableDtls.data[i] = {};
	 		linvoiceOpt.data.TableDtls.data[i].bankName = "HDFC Bank";
		 	linvoiceOpt.data.TableDtls.data[i].bankIFSC = "ABC12345";
		 	linvoiceOpt.data.TableDtls.data[i].accNum = "567492746568";
		 	linvoiceOpt.data.TableDtls.data[i].branchName = "Koramangala";
		 	linvoiceOpt.data.TableDtls.data[i].VPA = "mendis@hdfcbank";
		 	linvoiceOpt.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(linvoiceOpt.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = linvoiceOpt.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(linvoiceOpt.data.TableDtls.data.length);
		}
	 	linvoiceOpt.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		linvoiceOpt.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		linvoiceOpt.defaultPagSize = linvoiceOpt.data.TableDtls.data.length; 	
	 	}
	 	return linvoiceOpt;
	 }
	 loadUserDtlsFn = () =>
	 {
	 	let lusrDtls = {};
	 	lusrDtls.pagination = true;
	 	lusrDtls.tableTitle = "User Details";
	 	lusrDtls.page = true;
	 	lusrDtls.parentCls = "OrgTblContentCls";
	 	lusrDtls.size = 10;
	 	lusrDtls.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["User ID","User Name","Phone","Email","Password","Action"];
	 	let ltableheadAcces = ["userId","userName","phone","email","pasword","action"];
	 	lusrDtls.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		lusrDtls.data.TableDtls.head[i] = {};
	 		lusrDtls.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		lusrDtls.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		lusrDtls.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		lusrDtls.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			lusrDtls.data.TableDtls.head[i].id = 'click-me-button';
  				lusrDtls.data.TableDtls.head[i].render = ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>);
  				lusrDtls.data.TableDtls.head[i].Cell= (props) => <button onClick={(e) => this.handleButtonClick(e)}>Edit </button>
  			}
	 	}
	 	lusrDtls.data.TableDtls.data = [];
	 	for(let i=0;i<1;i++)
	 	{
	 		lusrDtls.data.TableDtls.data[i] = {};
	 		lusrDtls.data.TableDtls.data[i].userId = "TestUser";
		 	lusrDtls.data.TableDtls.data[i].userName = "Mendis Menon";
		 	lusrDtls.data.TableDtls.data[i].phone = "9900125588";
		 	lusrDtls.data.TableDtls.data[i].email = "mendismenon@gmail.com";
		 	lusrDtls.data.TableDtls.data[i].pasword = "********";
		 	lusrDtls.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(lusrDtls.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = lusrDtls.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(lusrDtls.data.TableDtls.data.length);
		}
	 	lusrDtls.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		lusrDtls.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		lusrDtls.defaultPagSize = lusrDtls.data.TableDtls.data.length; 	
	 	}
	 	return lusrDtls;
	 }
	 loadOrgnisationDtlsFn = () =>
	 {
	 	let lorgDtls = {};
	 	lorgDtls.pagination = true;
	 	lorgDtls.tableTitle = "Organisation Details";
	 	lorgDtls.page = true;
	 	lorgDtls.parentCls = "OrgTblContentCls";
	 	lorgDtls.size = 10;
	 	lorgDtls.data = {
	 		"TableDtls":{}
	 	};
	 	let ltableHeadLbls = ["Company Name","Pan Card","GST NO.","Address","Pincode","State","City","Action"];
	 	let ltableheadAcces = ["companyName","pancard","gst_num","address","pincode","state","city","action"];
	 	lorgDtls.data.TableDtls.head=[];
	 	for(let i=0;i<ltableHeadLbls.length;i++)
	 	{
	 		lorgDtls.data.TableDtls.head[i] = {};
	 		lorgDtls.data.TableDtls.head[i].Header = ltableHeadLbls[i];
	 		lorgDtls.data.TableDtls.head[i].accessor = ltableheadAcces[i];
	 		lorgDtls.data.TableDtls.head[i].headerStyle = { whiteSpace: 'unset' };
	 		lorgDtls.data.TableDtls.head[i].style = { whiteSpace: 'unset' };
	 		if(i == ltableHeadLbls.length-1)
	 		{
	 			lorgDtls.data.TableDtls.head[i].id = 'click-me-button';
  				lorgDtls.data.TableDtls.head[i].render = ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>);
  				lorgDtls.data.TableDtls.head[i].Cell= (props) => <button onClick={(e) => this.handleButtonClick(e)}>Edit </button>
  			}
	 	}
	 	lorgDtls.data.TableDtls.data = [];
	 	for(let i=0;i<1;i++)
	 	{
	 		lorgDtls.data.TableDtls.data[i] = {};
	 		lorgDtls.data.TableDtls.data[i].companyName = "Test Pvt Ltd";
		 	lorgDtls.data.TableDtls.data[i].pancard = "BHTPA6427M";
		 	lorgDtls.data.TableDtls.data[i].gst_num = "123345467";
		 	lorgDtls.data.TableDtls.data[i].address = "Bangalore";
		 	lorgDtls.data.TableDtls.data[i].pincode = "560029";
		 	lorgDtls.data.TableDtls.data[i].state = "Karnataka";
		 	lorgDtls.data.TableDtls.data[i].city = 'Bangalore';
		 	lorgDtls.data.TableDtls.data[i].action = '';
	 	}
	 	let pageSizeOpt = [];
	 	let ldefltPagSize = false;
	 	if(lorgDtls.data.TableDtls.data.length > 0)
	 	{
		 	let lcount = 0;
		 	let maxPageSize = lorgDtls.data.TableDtls.data.length/5;
		 	for(let i=0;i<maxPageSize-1;i++)
		 	{
		 		lcount = lcount +5;
		 		ldefltPagSize = true;
		 		pageSizeOpt.push(lcount);
		 	}
		 	pageSizeOpt.push(lorgDtls.data.TableDtls.data.length);
		}
	 	lorgDtls.pageSizeOpt = pageSizeOpt;
	 	if(ldefltPagSize)
	 	{
	 		lorgDtls.defaultPagSize = 5;
	 	}
	 	else
	 	{
	 		lorgDtls.defaultPagSize = lorgDtls.data.TableDtls.data.length; 	
	 	}
	 	return lorgDtls;
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
			</React.Fragment>
	 	);
	 }
}
export default SettingComponents