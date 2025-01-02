function RemoveButton(props) {
    function removeItemFromList() {
        const newList = removeItemRecursively(props.list, props.idToRemove)
        props.setList(newList)
    }

    function removeItemRecursively(list, idToRemove) {
        return list.filter(item => item.id !== idToRemove).map(item => ({
                ...item,
                children: removeItemRecursively(item.children, idToRemove)
            }))
    }

    return (
        <button onClick={removeItemFromList} className="border-2 border-black dark:border-zinc-200 rounded px-1.5 hover:border-gray-300">Remove</button>
    );
}

export default RemoveButton