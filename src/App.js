import { useState } from 'react'
import AuthContextProvider from './contexts/AuthContext';
import AppRouter from './router/AppRouter'

const initialValues = {
  title: '',
  image: '',
  content: '',
};


const App = () => {

  const [info, setInfo] = useState(initialValues);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log('submit', info);
    // if (info.id) {
    //   updateInfo(info);
    // } else {
    //   addInfo(info);
    // }
    setInfo(initialValues);
  };

  return (
    <AuthContextProvider >
      <AppRouter/>
     
     
    </AuthContextProvider>
  )
}

export default App;
