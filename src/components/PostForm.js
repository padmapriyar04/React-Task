import React,{ Component } from "react";
class PostForm extends Component{
    constructor(){
        super()
        this.state= {
            userId: '',
            title:'',
            body:''
        }
    }
    onchangehandler=(e) =>{
        this.setState({[e.target.name] : e.target.value } )
    }
    submithandler=(e)=>{
        e.preventDefault()
    }
    render(){
        return(
            <div onSubmit={this.submithandler}>
                <form>
                    <input type='text' name='userId' value={this.state.userId} onChange={this.changehandler} />
                    <input type='text' name='title' value={this.state.title onChange={this.changehandler}} />
                    <input type='text' name='body' value={this.state.body onChange={this.changehandler}} />
                </form>
                <button type='submit'>Submit</button>
            </div>
        )
    }
}
export default PostForm;