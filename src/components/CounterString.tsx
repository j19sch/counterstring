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

  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.value}
              onInput={this.onInput}
            />
            <button type="submit">Generate</button>
          </form>
        </section>
        <section>
          <p>
            counterstring: {counterstring(parseInt(this.state.stringLength))}
          </p>
        </section>
      </div>
    );
  }
}
