import './Item.css';

function Item(){

  return (
    <div className='polozky'>
        <input className='name-input' readOnly type="text"placeholder="Polozka"/>
        <input className='quantity-input' min={0} type="number" placeholder="Počet"/>
        <a>ks</a>
        <button  class="btn btn-success">Hotovo</button>
        <button class="btn btn-danger">Odebrat</button>
    </div>
  );
};

export default Item;
