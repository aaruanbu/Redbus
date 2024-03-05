import "./App.css";
import { Routss } from "./Components/Routing";
import { Provider } from "react-redux";
import { Stres } from "./Components/Store";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="rgb-overlay"></div>
          <div className="loader">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </div>
      ) : (
        <div className="main-content">
          <Provider store={Stres}>
            <Routss />
          </Provider>
        </div>
      )}
    </>
  );
}

export default App;
