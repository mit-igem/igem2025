import * as React from "react";

const Section = ({ children }) => {
  return <section>{children}</section>;
};

const IndexPage = () => {
  return (
    <main>
      <h1>building biology</h1>

      <Section>
        <h2>Upcoming events</h2>
        <p>?</p>
      </Section>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>MIT Synthetic Biology</title>;
