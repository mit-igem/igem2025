import * as React from "react";

const Hero = () => {
  return (
    <div>
      <h1>MIT iGEM 2025</h1>
    </div>
  );
};

const IndexPage = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>MIT Synthetic Biology | iGEM 2025</title>;
