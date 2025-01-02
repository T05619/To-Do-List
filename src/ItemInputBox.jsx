function ItemInputBox(props) {
    function handleChange(event) {
        props.setInput(event.target.value);
    }

    function checkIfEnterKey(event) {
        if (event.key === 'Enter') {
            if (props.Input !== '') {
                props.AddItemToList();
            }
        }
    }
    
    return (
        <input type="text" placeholder="Type" onChange={handleChange} onKeyDown={checkIfEnterKey} value={props.Input} className="border-2 border-black dark:border-zinc-200 dark:bg-zinc-900 dark:text-white rounded mx-2 my-2 px-1 pb-1 pl-1.5 hover:border-gray-300 w-32 sm:w-64 focus:border-gray-300 outline-none"/>
    );
}

export default ItemInputBox