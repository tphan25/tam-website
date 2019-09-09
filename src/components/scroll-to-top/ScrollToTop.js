import { Component } from "react";
//TODO: Elegant solution
export default class ScrollToTop extends Component {
  componentDidMount() {
    document.getElementById("appContainer").scrollTop = 0;
  }

  render() {
    return null;
  }
}
