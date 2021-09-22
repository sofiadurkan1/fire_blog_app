import { useState } from "react";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
