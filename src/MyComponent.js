import { ErrorBoundary } from "./ErrorBoundary";

const Broken = () => {
  throw new Error("Broken");
  //return <h2>Broken</h2>;
};

export const MyComponent = () => {
  return (
    <div>
      <h2>Above</h2>
      <ErrorBoundary name={"MyComponent"}>
        <Broken />
      </ErrorBoundary>
      <h2>Below</h2>
    </div>
  );
};
