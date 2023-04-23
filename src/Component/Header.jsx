import React,{Component} from 'react';
export default class Header extends Component{
	render(){
		return(
           <>
		   <div className="head">
		   <nav>
		      <ul>
			      <li><button className="btn btn-danger "><a href="#createdata">CreateData</a></button></li> 
			      <li><button className="btn btn-warning "><a href="#showdata">ShowData</a></button></li> 
			      <li><button className="btn btn-success "><a href="#editdata">EditData</a></button></li> 
			  </ul>
		   </nav>
		   </div>
		   </>
		)
	}
}