"use strict"

let
  React= require("react"),
  Button= require("react-mdl/lib/Button").default,
  Textfield= require("react-mdl/lib/Textfield").default,
  card= require("react-mdl/lib/Card"),
  Card= card.Card,
  CardActions= card.CardActions,
  CardTitle= card.CardTitle,
  CardText= card.CardText,
  Slider= require("react-mdl/lib/Slider").default

let UserInput= React.createClass({
	displayName: "UserInput",
	propTypes: {
		hoodie: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {username: "", password: ""}
	},
	render: function(props){
		return (<Card shadow={0} style={{width: "540px", margin: "10px 30px"}} >
				<CardTitle style={{color: "#33a"}}>
					Sign In/Sign Up
				</CardTitle>
				<CardText>
					<Textfield label="Username" style={{width: "300px"}} />
					<Textfield label="Password" style={{width: "300px"}} />
				</CardText>
				<CardActions>
					<Button ripple onClick={this.signIn}>Go</Button>
				</CardActions>
			</Card>)
	},
	setUsername: function(e){
		this.setState({
			username: e.target.value
		})
	},
	setPassword: function(e){
		this.setState({
			password: e.target.value
		})
	},
	signIn: function(){
		var signIn= this.props.hoodie.account.signIn({
			username: this.state.username,
			password: this.state.password 
		})
		var signUp= signIn.then(()=> false, (err)=> {
			return this.props.hoodie.account.signUp({
				username: this.state.username,
				password: this.state.password 
			})
		})
	}
})

module.exports= UserInput
