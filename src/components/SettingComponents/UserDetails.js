import React, { Component } from 'react';
export const loadUserDtlsFn = () =>
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