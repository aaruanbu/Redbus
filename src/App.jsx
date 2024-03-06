import "./App.css";
import { Routss } from "./Components/Routing";
import { Provider } from "react-redux";
import { Stres } from "./Components/Store";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Box className="loader">
          <Box className="rgb-overlay"></Box>
          <Box
            sx={{
              fontSize: {
                xs: "60px",
                sm: "90px",
                md: "130px",
                xl: "140px",
              },
            }}
            className="loader"
          >
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </Box>
        </Box>
      ) : (
        <Box className="main-content">
          <Provider store={Stres}>
            <Routss />
          </Provider>
        </Box>
      )}
    </>
  );
}

export default App;
