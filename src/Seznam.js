import './Seznam.css'
import Navbar from './Navbar';
import Item from './Item';
import React, {useState} from 'react';
import Modal from 'react-modal';

function List() {
  const [zaplyAlertHotovo, setZaplyAlertHotovo] = useState(true);
  const [zaplyAlertArchivovano, setZaplyAlertArchivovano] = useState(true);
  const [zaplyAlertSmazanePolohy, setZaplyAlertSmazanePolohy] = useState(true);

  // Funkce pro aktualizaci stavů
  const oznacenoHotove = () => {
    setZaplyAlertHotovo(!zaplyAlertHotovo);
    if (zaplyAlertHotovo) {
      alert('Označeno jako hotové');
    }
  };

  const archivovane = () => {
    setZaplyAlertArchivovano(!zaplyAlertArchivovano);
    if (zaplyAlertArchivovano) {
      alert('Archivováno');
    }
  };

  const smazanePolohy = () => {
    setZaplyAlertSmazanePolohy(!zaplyAlertSmazanePolohy);
    if (zaplyAlertSmazanePolohy) {
      alert('Položky smazány');
    }
  };



  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () =>{
    setModalOpen(true);
  };
  const closeModal = () =>{
    setModalOpen(false);
  };
  const [users,setUsers] = useState(['Rumburak','Ferda','Jeffrey Epstein']);
  const [newUserName, setNewUserName] = useState('');
  const addUser = () => {
    setUsers(prevUsers => [...prevUsers, newUserName]);
    setNewUserName('');
    closeModal();
    alert('Uživatel přidán úspěšně')
  };
  
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
            <button onClick={openModal} type="button" class="btn btn-primary">Přidat uživatele</button>
            <button class="btn btn-success" onClick={oznacenoHotove}>Označit jako hotové</button>
            <button class="btn btn-warning" onClick={archivovane}>Archivovat</button>
            <button class="btn btn-danger" onClick={smazanePolohy}>Smazat položky</button>
          </div>
        </div>
        <Modal className="modal-custom-style" isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Přidat uživatele">
          <div className='modal-box'>
            <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
            <button class="btn btn-primary" onClick={addUser}>Přidat</button>
            <button class="btn btn-danger" onClick={closeModal}>Zrušit</button>

            <h3>Seznam uživatelů:</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
    );
  };
export default List;
