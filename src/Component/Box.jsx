import React,{Component} from 'react';
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
		  <div className="box">
		     <form>
			    <h6>ProductName :</h6>
				<input type="text" className="form-control" placeholder="Enter your Product name ..." value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}/>
				<h6>TitleName :</h6>
				<input type="text" className="form-control" placeholder="Enter your Product title name ..." value={this.state. title} onChange={(event)=>{this.setState({title:event.target.value})}}/>
				<h6>PriceName :</h6>
				<input type="number" className="form-control" placeholder="Enter your Product price name ..." value={this.state.price} onChange={(event)=>{this.setState({price:event.target.value})}}/>
  				<h6>Quantity :</h6>
				<input type="number" className="form-control" placeholder="Enter your Product quantity..." value={this.state.quantity} onChange={(event)=>{this.setState({quantity:event.target.value})}}/>
				<h6>PicUrl :</h6>
				<input type="text" className="form-control" placeholder="Enter your imageUrl ..." value={this.state.image} onChange={(event)=>{this.setState({image:event.target.value})}}/>
				<h6>Description :</h6>
                <textarea className="txt" placeholder="Enter your description ..." value={this.state.textarea} onChange={(event)=>{this.setState({textarea:event.target.value})}}></textarea>
				<br/>
				<button className="btn btn-primary form-control" onClick={()=>{this.sub()}}>Submit</button>
		     </form>
		  </div>
		  <table className="table table-stripted ">
		    <thead>
			 <tr className="bg-success text-light"> 
			        <th>SrNo</th>
				    <th>ProductName</th>
				    <th>Title</th>
				    <th>Price</th>
				    <th>Quantity</th>
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
			method:'POST',
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
			}
		}).then((data)=>{return console.log(data)}).catch((error)=>{console.log(error)})
	}
     getRecord=()=>{
		 return this.state.User.map((item,index)=>{
		      return(
			     <tr key={item.id}>
				    <td>{item.id}</td>
				    <td>{item.name}</td>
				    <td>{item.title}</td>
				    <td>{item.price}</td>
				    <td>{item.quantity}</td>
				    <td><img src={item.image} style={{height:'50px'}}/></td>
				    <td>{item.textarea}</td>
				    <td><button className="btn btn-primary">Edit</button></td>
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
	}

