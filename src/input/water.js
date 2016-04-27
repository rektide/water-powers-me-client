let
  React= require("react"),
  card= require("react-mdl/lib/Card"),
  Card= card.Card,
  CardActions= card.CardActions,
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
				<CardTitle style={{color: "#33a"}}>
					Record a Drink
				</CardTitle>
				<CardText style={{display: "flex"}}>
					<div style={{flex: "0 1 auto", textAlign: "center", marginTop: "-1.2rem"}}>
						<span style={{fontSize: "0.8rem", fontWeight: "bolder"}}>
							oz
						</span><br/>
						<span style={{fontSize: "1.6rem", fontWeight: "bolder"}}>
							{this.state.oz}
						</span>
					</div>
					<div style={{flex: "1 1 auto"}}>
						<Slider min={0} max={32} value={this.state.oz} onChange={this.slide} />
					</div>
					<div style={{flex: "0 1 auto"}}>
						<Button style={{flex: "0 1 auto"}} raised ripple onClick={this.submit}>Drink</Button>
					</div>
				</CardText>
				<CardText border style={{display: "flex", justifyContent: "flex-end"}}>
					<div style={{flex: "0 1 auto"}}>
						<Button raised ripple onClick={this.setter(6)}>Cup (6oz)</Button>
					</div>
					<div style={{flex: "0 1 auto"}}>
						<Button raised ripple onClick={this.setter(9)}>Glass (9oz)</Button>
					</div>
					<div style={{flex: "0 1 auto"}}>
						<Button raised ripple onClick={this.setter(12)}>Tall (12oz)</Button>
					</div>
				</CardText>

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
