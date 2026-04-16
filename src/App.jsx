import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleClick = () => {
    setText("");
  };

  return (
    <section>
      <h1>Title H1</h1>

      <section>
        <h2>Input</h2>
        <input type="text" onChange={handleChange} value={text} />
      </section>

      <section>
        <h2>Text</h2>
        {text && <button onClick={handleClick}>Wipe text</button>}
        <p>{text}</p>
      </section>
    </section>
  );
};

export default App;
