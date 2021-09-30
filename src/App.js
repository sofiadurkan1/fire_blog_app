import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./router/AppRouter";
import "./App.css"

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
