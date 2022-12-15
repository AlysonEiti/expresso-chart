import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {

  const [colaborators, setColaborators] = useState([]);

  const whenNewColaboratorRegistered = (colaborator) => {
    console.log(colaborator);
    // colaborators.push(colaborator);
    setColaborators([...colaborators, colaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form whenNewColaborator={colaborator => whenNewColaboratorRegistered(colaborator)}/>
    </div>
  );
}

export default App;
