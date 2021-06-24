import React, { PureComponent, Fragment } from "react";

class Columns extends React.Component {
  render() {
    return (
      <Fragment>
        <td>Hello</td>
        <td>World</td>
      </Fragment>
    );
  }
}

export default class Table extends PureComponent {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}
