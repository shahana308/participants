/** @format */

import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

import Participants from "./components/Participants";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/participants");
  };

  return (
    <>
      <Button variant="light" onClick={routeChange}>
        Generate Links
      </Button>

      <Routes>
        <Route path="/participants" element={<Participants />} />
      </Routes>
    </>
  );
}

export default App;
