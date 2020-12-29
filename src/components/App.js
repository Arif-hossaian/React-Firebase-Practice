import React from "react"
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup"


function App() {
  return (
    <div >
      <AuthProvider>
        <Signup />
      </AuthProvider>
    </div>
  );
}

export default App;
