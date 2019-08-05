import React from "react"
import { Link } from "react-router-dom"

export default class Page2 extends React.Component {

  render() {
    return(
      <React.Fragment>
        <Link to="/">Page1</Link>
      </React.Fragment>
    )
  }
}
