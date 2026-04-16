import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <section>
      <h1>Title H1</h1>

      <section>
        <h2>Input</h2>
        <input type="text" onChange={handleChange} />
      </section>

      <section>
        <h2>Text</h2>
        <p>{text}</p>
      </section>
    </section>
  );
};

export default App;
