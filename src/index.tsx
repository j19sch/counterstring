import { render, Component } from "preact";

import "./style.css";
import { CounterString } from "./components/CounterString";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Perlclip's counterstring but on the web</h1>
        <CounterString />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
