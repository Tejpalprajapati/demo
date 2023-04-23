import React,{Component} from 'react';
import {route,redirect} from '../Router';
 import config from '../config/config.json';
export default class Box extends Component{
	constructor(props){
		super(props)
		{
			this.state={
			name:'',
			title:'',
			price:'',
			quantity:'',
			image:'',
			textarea:'',
			User:[]
		}
		}
	}
	render(){
		return(
          <>
		  <br/>
		  <div className="box">
		     <form>
			    <h6>ProductName :</h6>
				<input type="text" className="form-control" placeholder="Enter your Product name ..." value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}/>
				<h6>TitleName :</h6>
				<input type="text" className="form-control" placeholder="Enter your Product title name ..." value={this.state. title} onChange={(event)=>{this.setState({title:event.target.value})}}/>
				<h6>PriceName :</h6>
				<input type="number" className="form-control" placeholder="Enter your Product price name ..." value={this.state.price} onChange={(event)=>{this.setState({price:event.target.value})}}/>
  				
				<h6>PicUrl :</h6>
				<input type="text" className="form-control" placeholder="Enter your imageUrl ..." value={this.state.image} onChange={(event)=>{this.setState({image:event.target.value})}}/>
				<h6>Description :</h6>
                <textarea className="txt" placeholder="Enter your description ..." value={this.state.textarea} onChange={(event)=>{this.setState({textarea:event.target.value})}}></textarea>
				<br/><br/>
               <input type="button" className="btn btn-primary fs-5 text-light form-control "value="UPDATE" onClick={this.updateData} id="btn"/>
		     </form>
		  </div>
          </>
		)
	}
	componentDidMount()
	 {
		 let id=this.props.userId;
		 //  const url ='http://localhost:5000/User/'+id;
		   
		   let updateUser=fetch(config.Local_URL+id).then((response)=>{
			   if(response.ok){
				   return response.json();
			   }
		   }).then((data)=>{
			   this.setState({
		    name:data.name,
			title:data.title,
			price:data.price,
			image:data.image,
			textarea:data.textarea
			   })
		   }).catch((error)=>{
			   console.log(error);
		   })
		   
	 }	
	updateData=()=>{
				 let id =this.props.userId;
		 let updateUser={
			name:this.state.name,
			title:this.state.title,
			price:this.state.price,
			image:this.state.image,
			textarea:this.state.textarea,

		 }
		 console.log(config);
		 let promise=fetch(config.Local_URL+id,{
			 headers:{
				 "Content-Type":"application/json"
			 },
			 method:"PUT",
			 body:JSON.stringify(updateUser)
		 }).then((response)=>{
		     if(response.ok)
			 {
				 return redirect('showdata')
			 }
		 }).then((data)=>{
			 
		 }).catch((error)=>{
			 
		 });
			 

	 }		
	
	}
     
	

