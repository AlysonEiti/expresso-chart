import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Software Developer',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Data Scientist',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Operations Analyst',
      color: '#E06869'
    },
    {
      id: uuidv4(),
      name: 'Project Managers',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Marketing, UX & Design',
      color: '#A60157'
    },
    {
      id: uuidv4(),
      name: 'Others',
      color: '#FF8A29',
    }
  ]);

  const initial = [
    {
      id: uuidv4(),
      favorite: true,
      name: 'ALYSON EITI',
      occupation: 'Software Developer & Data Scientist at Bradesco',
      image: 'images/Profile/alyson_eiti.jfif',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'NILTON MARCELINO',
      occupation: 'DevOps & Manager at Bradesco',
      image: 'images/Profile/nilton_oliveira.jfif',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'MARIANA SILVA',
      occupation: 'Front-End Developer',
      image: 'images/Profile/mariana_silva.jfif',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'THAYNA CORREA',
      occupation: 'Software Developer & Data Scientist at Bradesco',
      image: 'images/Profile/thayna_correa.jfif',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'ALEXANDRE LUCAS',
      occupation: 'Analytist, BI & Suport',
      image: 'images/Profile/alexandre_lucas.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'ANA RAQUEL',
      occupation: 'Data Scientist & Instructor at FIAP',
      image: 'images/Profile/ana_raquel.jfif',
      team: teams[1].name
    },    
    {
      id: uuidv4(),
      favorite: false,
      name: 'CAROLINE STELLA',
      occupation: 'Financial Analyst at Bradesco',
      image: 'images/Profile/caroline_stella.jfif',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'KELVIN BARCELOS',
      occupation: 'KPI & BI at Bradesco',
      image: 'images/Profile/kelvin_barcelo.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'VALTER BELLEI',
      occupation: 'Department Manager & PMO at Bradesco',
      image: 'images/Profile/valter_bellei.jfif',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DIEGO GUAREZI',
      occupation: 'Project Analyst',
      image: 'images/Profile/diego_guarezi.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'ANA FLAVIA',
      occupation: 'Project Analyst & Marketing at Bradesco',
      image: 'images/Profile/ana_flavia.jfif',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUSTAVO FRANCA',
      occupation: 'Art and Audiovisual Director at GOOM',
      image: 'images/Profile/gustavo_franca.jfif',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: true,
      name: 'ANYA FORGER',
      occupation: 'Esper',
      image: 'images/Profile/anya_forger.jpg',
      team: teams[6].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'HIMEKO AIKYO',
      occupation: 'Influencer',
      image: 'images/Profile/himeko_aikyo.jpeg',
      team: teams[6].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'VITOR BARRANQUEIRO',
      occupation: 'Cosplayer',
      image: 'images/Profile/vitor_barranqueiro.jpeg',
      team: teams[6].name
    },
  ]

  const [colaborators, setColaborators] = useState(initial);

  const whenNewColaboratorRegistered = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  }

  function deleteColaborator(id) {
    setColaborators(colaborators.filter(colaborator => colaborator.id !== id));
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  function registerTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4()} ]);
  }

  function changeFavorite(id) {
    setColaborators(colaborators.map(colaborator => {
      if(colaborator.id === id) colaborator.favorite = !colaborator.favorite;
      return colaborator;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        registerTeam={registerTeam}
        teams={teams.map(team => team.name)} 
        whenNewColaborator={colaborator => whenNewColaboratorRegistered(colaborator)}
      /> 
      {teams.map(team => 
        <Team 
          id={team.id}
          key={team.name} 
          name={team.name} 
          color={team.color}
          colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}  
          whenDelete={deleteColaborator} 
          changeColor={changeTeamColor}
          whenFavorite={changeFavorite}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
