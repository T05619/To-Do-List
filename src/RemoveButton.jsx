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
        <button onClick={removeItemFromList} className="duration-500 border-2 border-black dark:border-zinc-200 rounded px-1.5 hover:border-zinc-500 dark:hover:border-zinc-400">Remove</button>
    );
}

export default RemoveButton