let
  React= require("react"),
  UserNav= require("../nav/user"),
  WaterInput= require("../input/water"),
  UserInput = require("../input/user"),
  layout= require("react-mdl/lib/Layout"),
  Layout= layout.Layout,
  Drawer= layout.Drawer,
  Header= layout.Header,
  Navigation= layout.Navigation,
  Content= layout.Content,
  Div= React.DOM.div,
  State= require("../state"),
  history = require("history")


let TrackerPage= React.createClass({
	displayName: "TrackerPage",
	getInitialState: State,
	componentWillMount: function(){
		this.state.history.listen(location => {
			this.setState({
				showLoginCard: location.hash === "#signin"
			})
		})
	},
	render: function(props){
		let loginCard = this.state.showLoginCard ? <UserInput hoodie={this.state.hoodie} /> : null
		return (<div>
				<Layout fixedHeader>
					<Header title="WaterPowers.me">
						<Navigation>
							<UserNav hoodie={this.state.hoodie} />
						</Navigation>
					</Header>
					<Drawer title="WaterPowers.me">
						<a href="#">⌂</a>
					</Drawer>
					<Content>
						<WaterInput hoodie={this.state.hoodie} />
						{loginCard}
					</Content>
				</Layout>
			</div>)
	}
})

module.exports= TrackerPage
