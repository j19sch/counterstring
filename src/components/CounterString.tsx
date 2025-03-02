import { Component } from "preact";
import { counterstring } from "../counterstring";

export class CounterString extends Component {
  state = { value: "", stringLength: "" };

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
  };

  // TODO: form looks different if within section

  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.onSubmit} id="counterstring-form">
            <div>
              <input
                type="text"
                id="length"
                value={this.state.value}
                onInput={this.onInput}
              />
              <button type="submit">Generate</button>
            </div>
            <div id="counterstring-result">
              <label for="counterstring-output">counterstring:</label>
              <output
                name="counterstring"
                for="length"
                form="counterstring-form"
                id="counterstring-output"
              >
                {counterstring(parseInt(this.state.stringLength))}
              </output>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
