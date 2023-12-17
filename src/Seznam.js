import './Seznam.css'
import Navbar from './Navbar';
import Item from './Item';

function List() {
    return (
      <div>
        <Navbar />
        <div className='seznamnazev'>
          <h1>Nazev</h1>
        </div>
        <div className='itemy'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
        <div className='tlacitka'>
          <div className='add'>
            <button class="btn btn-primary">Přidat položku</button>
          </div>
          <div className='dalsi'>
            <button class="btn btn-primary">Přidat uživatele</button>
            <button class="btn btn-success">Označit jako hotové</button>
            <button class="btn btn-warning">Archivovat</button>
            <button class="btn btn-danger">Smazat položky</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default List;