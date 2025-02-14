import ItemInputBox from "./ItemInputBox";

import { v4 as uuidv4 } from 'uuid';

function InputAndAdd(props) {
    function AddItemToList() {
        if (props.input != '') {
          const newList = props.list.concat({text: props.input, id: uuidv4(), checked: false, disabled: false, children: []})
          props.setList(newList);
          props.setInput('');
        }
    }

    return (
        <div className="flex space-x-1">
            <ItemInputBox setInput={props.setInput} Input={props.input} AddItemToList={AddItemToList}/>
            <button onClick={AddItemToList} className='duration-500 text-lg dark:text-white hover:text-zinc-500 hover:dark:text-zinc-300'>Add</button>
        </div>
    );
}

export default InputAndAdd