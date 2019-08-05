import React from "react"
import { Link } from "react-router-dom"
import { DatePicker } from 'antd';

export default class Page1 extends React.Component {

  render() {
    return(
      <React.Fragment>
        <h1>Yay AntD is loaded! (also added a simple router):</h1>
        <Link to="/page2">Page2</Link>
        <hr/>
        <p><a target="_blank" href="https://ant.design/components/layout/">click here for to learn more about antd</a></p>
      </React.Fragment>
    )
  }
}
