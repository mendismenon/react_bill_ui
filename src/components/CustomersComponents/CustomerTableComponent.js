import React, { Component } from 'react';
const $ = require('jquery'); 
$.DataTable = require('datatables.net');
import '../../css/dataTable.css';
//https://github.com/BorisKozo/react-datatables/tree/master/src
//https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa
class CustomerTableComponent extends Component {
	constructor(props) {
			super(props);
			this.state = {"columnData":[],"tableData":{},fixedAlignment:false}
			console.log("in TableComponent props :: "+JSON.stringify(props));
	}
	componentDidMount(){
 		var self = this;
 		$('#mytable').DataTable({
		  "bAutoWidth": false,
		  "bDestroy": true,		
		  "fnDrawCallback": function() {		  		
            	self.forceUpdate();        	
          }, 
		});
 	}
 	componentDidUpdate(){
 		$('#mytable').DataTable({
		  "bAutoWidth": false,
		  "bDestroy": true,	
		});
 	}
 	render(){
 		var x = [];
        
        x.push(
            <tr key="1"><td key="2">zaxs</td><td key="3">hello</td><td key="4">xzc</td></tr>
        )
        
        x.push(
            <tr key="5"><td key="6">hello</td><td key="7">wef</td><td key="8">qw</td></tr>
        )
        
        x.push(
            <tr key="9"><td key="10">wefwe</td><td key="11">fgn</td><td key="12">asc</td></tr>
        )
 		return(
 			<div>
 				<table className="table table-bordered display cell-border" id="mytable">
 				<thead>
						<tr className="" key="13">
							<th key="14">first</th>
							<th key="15">second</th>
							<th key="16">third</th>
						</tr>	
					</thead>
					<tbody>
						{x}
					</tbody>
 				</table>
 			</div>
 		);
 	}
}
export default CustomerTableComponent