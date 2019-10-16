import React, { Component } from 'react';
export const loadOrgnisationDtlsFn = () =>
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