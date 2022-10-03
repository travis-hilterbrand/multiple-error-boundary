import { ErrorBoundary } from "./ErrorBoundary";
import { MyComponent } from "./MyComponent";

import "./App.css";

function App() {
  return (
    <ErrorBoundary name={"Top"}>
      <div className="App">
        <MyComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
