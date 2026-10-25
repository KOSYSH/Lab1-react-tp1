import './App.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import BoutonAlerte from './BoutonAlerte';

function App() {
  return (
    <div className="App">
      <h1>Mon Premier TP React — BOUDAD Yasser</h1>
      <HelloWorld />
      <hr />
      <Greeting prenom="BOUDAD Yasser" />
      <Greeting prenom="Hamid" />
      <Greeting prenom="Hamid" />
      <Profil nom="BOUDAD Yasser" age={22} estActif={true} />
      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Renault" modele="Clio" couleur="Bleue" />
      <Voiture marque="Peugeot" modele="208" />
      <ListeCourses items={['Lait', 'Pain', 'Pommes']} />
      <BoutonAlerte message="Bienvenue dans mon application React !" />
    </div>
  );
}

export default App;
