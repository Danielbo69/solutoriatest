import { useState } from "react";
import "./App.css";
import ButtonStart from "./components/ButtonStart/ButtonStart";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [information, setInformation] = useState();

  const restapiPost = () => {
    fetch(`${process.env.REACT_APP_URL_BASE}/api/acceso`, {
      method: "POST",
      body: {
        userName: process.env.REACT_APP_USER,
        flagJson: true
      },
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    })
      .then((response) => {
        if(response.status === 200){
          console.log(response.json());
        }
      })
      .catch((error) => console.error("Error", error))
      .then((response) => console.log("Success", response));
  };

  const restapiGet = async (res) => {
    console.log(res);
    await fetch(`${process.env.REACT_APP_URL_BASE}/api/indicadores/`).then(
      (response) => {
        if (response.status === 200) {
          // setInformation(response.json())
          console.log(response.json());
        }
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {information ? (
          <Dashboard information={information} />
        ) : (
          <ButtonStart restapiPost={restapiPost} />
        )}
      </header>
    </div>
  );
}

export default App;
