import React,{Component} from 'react';
import {route,redirect} from '../Router';
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
				<button className="btn btn-primary form-control" onClick={()=>{this.sub()}}>Submit</button>
		     </form>
		  </div>
          </>
		)
	}
	sub=()=>{
		const url ='http://localhost:5000/User';
		let newData={
			name:this.state.name,
			title:this.state.title,
			price:this.state.price,
			quantity:this.quantity,
			image:this.state.image,
			textarea:this.state.textarea,
		}
		let promise=fetch(url,{
			headers:{
				'Content-Type':'application/json',
			},
			method:"POST",
			body:JSON.stringify(newData)
		});
		promise.then((response)=>{
			if(response.ok){
			this.setState({
		    name:this.state.name='',
			title:this.state.title='',
			price:this.state.price='',
			quantity:this.quantity='',
			image:this.state.image='',
			textarea:this.state.textarea='',
					})
					return redirect ('showdata')
			}
		}).then((data)=>{return console.log(data)}).catch((error)=>{console.log(error)})
	}
     
	}

