import { useState } from 'react'
import NewBlog from './pages/NewBlog'
import { addInfo, updateInfo } from './helpers/functions';

const initialValues = {
  title: '',
  image: '',
  content: 'NO INFO',
};


const App = () => {

  const [info, setInfo] = useState(initialValues);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log('submit', info);
    if (info.id) {
      updateInfo(info);
    } else {
      addInfo(info);
    }
    setInfo(initialValues);
  };
  return (
     <div className="App">
      <NewBlog
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
     
    </div>
  )
}

export default App;
