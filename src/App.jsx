import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Box from './Component/Box';
import Header from './Component/Header';
import CreateData from './Component/CreateData';
import ShowData from './Component/ShowData';
import EditData from './Component/EditData';
import config from './config/config.json';	
import {route,redirect} from './Router'
import './index3.css';
export default class App extends Component{
	constructor(props)
	{
		super(props)
						this.id=window.localStorage.getItem('hash').split('/')[1];
	   this.view={
		createdata:<CreateData/>,	
		showdata:<ShowData/>,	
				 ['editdata/'+this.id]:<EditData userId={this.id}/>	
	}
	}
	render(){
		return(
          <>
		   <Header/>
		   {this.amazon()}
          </>
		)
	}
	amazon=()=>{
		return this.view[route]
	}
}
