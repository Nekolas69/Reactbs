import './Card.css';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div>
      <div class="card text-center" >
        <div class="card-body">
          <h5 class="card-title">Nazev</h5>
          <Link to={"/seznam"} class="btn btn-primary">Zobrazit nákupní seznam</Link>
          <button class="btn btn-danger">Smazat</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
