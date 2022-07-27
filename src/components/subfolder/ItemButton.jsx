const Item = ({name, id, addItem}) => {    
    return(<div>
        <button onClick={e=>addItem({name, id})}>{name}</button>
    </div>)
}

export default Item;