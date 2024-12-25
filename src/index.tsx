import { render, Component } from "preact";

// import preactLogo from "./assets/preact.svg";
import "./style.css";
import { counterstring } from "./counterstring";

class App extends Component {
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
        <h1>Perlclips' counterstring but on the web</h1>
        <section>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.value}
              onInput={this.onInput}
            />
            <button type="submit">Update</button>
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

render(<App />, document.getElementById("app"));

// export function App() {
//   return (
//     <div>
//       {/* <a href="https://preactjs.com" target="_blank">
//         <img src={preactLogo} alt="Preact logo" height="160" width="160" />
//       </a> */}
//       {/* <h1>Get Started building Vite-powered Preact Apps </h1> */}
//       <h1>Perlclips' counterstring but on the web</h1>
//       <section>
//       <form>
//           <input type="text" />
//           <button type="submit">Update</button>
//         </form>
//         {/* <Resource
//           title="Learn Preact"
//           description="If you're new to Preact, try the interactive tutorial to learn important concepts"
//           href="https://preactjs.com/tutorial"
//         />
//         <Resource
//           title="Differences to React"
//           description="If you're coming from React, you may want to check out our docs to see where Preact differs"
//           href="https://preactjs.com/guide/v10/differences-to-react"
//         />
//         <Resource
//           title="Learn Vite"
//           description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
//           href="https://vitejs.dev"
//         /> */}
//       </section>
//     </div>
//   );
// }

// function Resource(props) {
//   return (
//     <a href={props.href} target="_blank" class="resource">
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </a>
//   );
// }
