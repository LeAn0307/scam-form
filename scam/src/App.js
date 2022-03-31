import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  // const [email, setEmail] = useState("");
  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const showData = () => {
    console.log("show data: ", form);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <lable>
            Name:
            <input onChange={onChange} name="name" value={form.name}></input>
          </lable>
          <hr />
          <lable>
            Email:
            <input onChange={onChange} name="email" value={form.email}></input>
          </lable>
          <div>
            <button onClick={showData}>submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
