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
	componentDidMount=()=>{
				const url ='http://localhost:5000/User';
				let promise =fetch(url);
				promise.then((response)=>{
					return response.json()
				}).then((data)=>{
					this.setState({
						User:data
					})
				}).catch((error)=>{
					console.log(error)
				})
	}
	render(){
		return(
          <>
		  <br/>
		  <br/>
		  <table className="table table-stripted ">
		    <thead>
			 <tr className="bg-success text-light"> 
			        <th>SrNo</th>
				    <th>ProductName</th>
				    <th>Title</th>
				    <th>Price</th>
				    <th>PicURL</th>
				    <th>Textarea</th>
				    <th>Edit</th>
				    <th>Delete</th>
			 </tr>
		    </thead>
			<tbody>
			{this.getRecord()}
			</tbody>
		  </table>
          </>
		)
	}
     getRecord=()=>{
		 return this.state.User.map((item,index)=>{
		      return(
			     <tr key={item.id}>
				    <td>{item.id}</td>
				    <td>{item.name}</td>
				    <td>{item.title}</td>
				    <td>{item.price}</td>
				    
				    <td><img src={item.image} style={{height:'50px'}}/></td>
				    <td>{item.textarea}</td>
				    <td><button className="btn btn-primary" onClick={()=>{this.editData(item.id)}}>Edit</button></td>
				    <td><button className="btn btn-danger"  onClick={()=>{this.deleteData(item.id,index)}}>Delete</button></td>
			     </tr>
			  )
		 })
	 }
	 deleteData=(id,index)=>{
		 console.log(id)
		if(window.confirm("Are you sure Delete ?"))
		 {
		const url = 'http://localhost:5000/User/'+id;
		let promise = fetch(url,{
			headers:{
				'Content-Type':'application/json',
			},
			
			method:"DELETE"
		});
		promise.then((response)=>{
			if(response.ok){
				let mm = [...this.state.User]
				mm.splice(index,1)
				this.setState({
					User:mm
				})
			}
		}).then((data)=>{
			return console.log(data)
		}).catch((error)=>{console.log(error)})
	}
	 }
	 editData=(id)=>{
		 return redirect('editdata/'+id)
	 }
	}

