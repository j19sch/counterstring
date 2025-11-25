import { Component } from "preact";
import { counterstringWrapper } from "../counterstring";

export class CounterString extends Component {
  state = { value: "", stringLength: "", result: "" };

  onInput = (ev) => {
    // This will schedule a state update. Once updated the component
    // will automatically re-render itself.
    this.setState({ value: ev.currentTarget.value });
  };

  // Add a submit handler that updates the `name` with the latest input value
  onSubmit = (ev) => {
    // Prevent default browser behavior (aka don't submit the form here)
    ev.preventDefault();

    this.setState({ stringLength: this.state.value });
    this.setState({ result: counterstringWrapper(this.state.value) });
  };

  onClick = async () => {
    await navigator.clipboard.writeText(this.state.result);
  };

  // TODO: form looks different if within section

  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.onSubmit} id="counterstring-form">
            <div>
              <label for="length">length:</label>
              <input
                type="text"
                id="length"
                value={this.state.value}
                onInput={this.onInput}
              />
              <button type="submit">Generate</button>
            </div>
            <div id="counterstring-result">
              <button onClick={this.onClick} type="button">
                Copy
              </button>
              {/* <label for="counterstring-output">counterstring:</label> */}
              <output
                name="counterstring"
                for="length"
                form="counterstring-form"
                id="counterstring-output"
                aria-label="counterstring output"
              >
                {this.state.result}
              </output>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
