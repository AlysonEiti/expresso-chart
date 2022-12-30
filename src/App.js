import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {

  const teams = [
    {
      name: 'Software Developer',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Data Scients',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Mobile',
      primaryColor: '#A60157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Operations Analyst',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Project Managers',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9FS'
    },
    {
      name: 'Marketing, UX & Design',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Others',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const initial = [
    {
      name: 'ALYSON EITI',
      occupation: 'Software Developer & Data Scientist at Bradesco',
      image: 'images/Profile/alyson_eiti.jfif',
      team: teams[0].name
    },
    {
      name: 'NILTON MARCELINO',
      occupation: 'DevOps & Manager at Bradesco',
      image: 'images/Profile/nilton_oliveira.jfif',
      team: teams[0].name
    },
    {
      name: 'MARIANA SILVA',
      occupation: 'Front-End Developer',
      image: 'images/Profile/mariana_silva.jfif',
      team: teams[0].name
    },
    {
      name: 'THAYNA CORREA',
      occupation: 'Software Developer & Data Scientist at Bradesco',
      image: 'images/Profile/thayna_correa.jfif',
      team: teams[1].name
    },
    {
      name: 'ALEXANDRE LUCAS',
      occupation: 'Analytist, BI & Suport',
      image: 'images/Profile/alexandre_lucas.jpeg',
      team: teams[1].name
    },
    {
      name: 'ANA RAQUEL',
      occupation: 'Data Scientist & Instructor at FIAP',
      image: 'images/Profile/ana_raquel.jfif',
      team: teams[1].name
    },    
    {
      name: 'CAROLINE STELLA',
      occupation: 'Financial Analyst at Bradesco',
      image: 'images/Profile/caroline_stella.jfif',
      team: teams[3].name
    },
    {
      name: 'KELVIN BARCELOS',
      occupation: 'KPI & BI at Bradesco',
      image: 'images/Profile/kelvin_barcelo.jpeg',
      team: teams[3].name
    },
    {
      name: 'VALTER BELLEI',
      occupation: 'Department Manager & PMO at Bradesco',
      image: 'images/Profile/valter_bellei.jfif',
      team: teams[4].name
    },
    {
      name: 'DIEGO GUAREZI',
      occupation: 'Project Analyst',
      image: 'images/Profile/diego_guarezi.jpeg',
      team: teams[4].name
    },
    {
      name: 'ANA FLAVIA',
      occupation: 'Project Analyst & Marketing at Bradesco',
      image: 'images/Profile/ana_flavia.jfif',
      team: teams[5].name
    },
    {
      name: 'GUSTAVO FRANCA',
      occupation: 'Art and Audiovisual Director at GOOM',
      image: 'images/Profile/gustavo_franca.jfif',
      team: teams[5].name
    },
    {
      name: 'ANYA FORGER',
      occupation: 'Esper',
      image: 'images/Profile/anya_forger.jpg',
      team: teams[6].name
    },
    {
      name: 'HIMEKO AIKYO',
      occupation: 'Influencer',
      image: 'images/Profile/himeko_aikyo.jpeg',
      team: teams[6].name
    },
    {
      name: 'VITOR BARRANQUEIRO',
      occupation: 'Cosplayer',
      image: 'images/Profile/vitor_barranqueiro.jpeg',
      team: teams[6].name
    },
  ]

  const [colaborators, setColaborators] = useState(initial);

  const whenNewColaboratorRegistered = (colaborator) => {
    console.log(colaborator);
    debugger;
    setColaborators([...colaborators, colaborator]);
  }

  function deleteColaborator() {
    console.log('Removing colaborator...');
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenNewColaborator={colaborator => whenNewColaboratorRegistered(colaborator)}/> 
      {teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor}
          colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}  
          whenDelete={deleteColaborator} 
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
