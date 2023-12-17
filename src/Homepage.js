import Card from './Card'
import Navbar from './Navbar'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.css';

const Homepage = () => {
    return(
        <div>
            <Navbar />    
            <h1>Přehled</h1>
            <div className='butny'>
                <button class="btn btn-primary">Zobrazit všechny</button>
                <button class="btn btn-success">Vytvořit nový seznam</button>
            </div>
            <div className='karty'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            
        </div>
    );
};

export default Homepage;
