let
  React= require("react"),
  card= require("react-mdl/lib/Card"),
  Card= card.Card,
  CardTitle= card.CardTitle,
  CardText= card.CardText,
  Slider= require("react-mdl/lib/Slider").default,
  Button= require("react-mdl/lib/Button").default

let WaterInput= React.createClass({
	displayName: "WaterInput",
	getInitialState: function(){
		return { oz: 8 }
	},
	render: function(props){
		return (<Card shadow={0} style={{width: "540px", margin: "10px 30px"}} >
				<CardTitle style={{color: "#33a"}}>Record a Drink</CardTitle>
				<div style={{display:"flex"}}>
					<Slider style={{"flexGrow": 3}} min={0} max={32} value={this.state.oz} onChange={this.slide} />
					<CardText>{this.state.oz}</CardText>
					<Button raised ripple onClick={this.submit}>Drink</Button>
				</div>
				<div>
					<Button raised ripple onClick={this.setter(6)}>Cup (6oz)</Button>
					<Button raised ripple onClick={this.setter(9)}>Glass (9oz)</Button>
					<Button raised ripple onClick={this.setter(12)}>Tall (12oz)</Button>
				</div>
			</Card>)
	},
	slide: function(e){
		this.set(e.target.value)
	},
	setter: function(oz){
		return ()=>{
			this.set(oz)
			this.submit()
		}
	},
	set: function(n){
		n= Number.parseInt(n)
		this.setState({
			oz: n
		})
	},
	submit: function(){
	}
})

module.exports= WaterInput
