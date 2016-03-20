let
  React= require("react"),
  ReactDOM= require("react-dom"),
  TrackerPage= require("./page/tracker")

ReactDOM.render(
	<TrackerPage/>,
	document.querySelector("#trackerPage"))
