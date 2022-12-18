import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {

  const teams = [
    {
      name: 'TI (Developer & Suport)',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'MIS, Finantial & BI',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Project',
      primaryColor: '#A60157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Others Teams',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Outsourced',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9FS'
    },
    {
      name: 'Departments',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Friends',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [colaborators, setColaborators] = useState([]);

  const whenNewColaboratorRegistered = (colaborator) => {
    console.log(colaborator);
    // colaborators.push(colaborator);
    setColaborators([...colaborators, colaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenNewColaborator={colaborator => whenNewColaboratorRegistered(colaborator)}/> 
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}   
      />)}
      <Footer />
    </div>
  );
}

export default App;
