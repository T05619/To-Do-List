import RemoveButton from "./RemoveButton";

import { v4 as uuidv4 } from 'uuid';

function ListRender(props) {
    function renderListItem(item) {
        function toggleCheckbox(id, checked) {
            const updatedList = updateChildrenCheckedStatus(props.list, id, checked);
            props.setList(updatedList);
        }

        return <li key={item.id} className="my-2 mx-2 dark:text-white">
            <div className="flex">
                <input type="checkbox" id={item.id + "-Checkbox"} className="cursor-pointer w-5 h-5 mt-1" onChange={() => toggleCheckbox(item.id, !item.checked)} checked={item.checked !== undefined ? item.checked : false} disabled={item.disabled !== undefined ? item.disabled : false}/>
                <p className="w-64 text-ellipsis overflow-hidden mx-2 border-2 border-zinc-400 rounded px-1">{item.text}</p>
                <button onClick={() => createNewChild(item)} className="duration-500 hover:border-zinc-500 dark:hover:border-zinc-400 dark:border-zinc-200 border-2 border-black dark:border-zinc-200 rounded hidden sm:block w-7 h-7 mr-2">+</button>
                <RemoveButton list={props.list} setList={props.setList} idToRemove={item.id}/>
            </div>
            {item.children.length > 0 && (
                <ul className="ml-6">
                    {item.children.map(renderListItem)}
                </ul>
            )}
        </li>
    }

    function createNewChild(parentItem) {
        if (props.input != '') {
            const newChild = {text: props.input, id: uuidv4(), checked: false, children: []};
            const updatedList = updateChildren(props.list, parentItem.id, newChild);
    
            props.setList(updatedList);
            props.setInput('');
        }
    }
    
    function updateChildren(children, parentId, newChild) {
        return children.map(child => {
            if (child.id === parentId) {
                return { ...child, children: [...child.children, newChild] };
            }
    
            return {
                ...child,
                children: updateChildren(child.children, parentId, newChild),
            };
        });
    }

    function updateChildrenCheckedStatus(list, parentId, checked) {
        return list.map(item => {
            if (item.id === parentId) {
                return {
                    ...item,
                    checked: checked,
                    disabled: false,
                    children: updateAllChildrenCheckedStatus(item.children, checked),
                };
            }
    
            return {
                ...item,
                children: updateChildrenCheckedStatus(item.children, parentId, checked),
            };
        });
    }
    
    function updateAllChildrenCheckedStatus(children, checked) {
        return children.map(child => ({
            ...child,
            checked: checked,
            disabled: checked,
            children: updateAllChildrenCheckedStatus(child.children, checked),
        }));
    }
    

    return (
        <ul>
            {props.list.map(renderListItem)}
        </ul>
    );
}

export default ListRender