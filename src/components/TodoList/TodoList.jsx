import css from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { remove } from "Redux/todo/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.contacts);
    const filter = useSelector((state) => state.todo.filter);

    const filerTodoList = () => {
        if (filter === '') return todo; 
        return todo.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    }

    const filteredTodo = filerTodoList();

    return (
        <ul>
            {filteredTodo.map(({id, name, number }) => (
                <li key={id}>
                    <p className={css.text}>{name}: {number}</p>
                    <button className={css.btn} onClick={(e) => dispatch(remove(id))}>
                        Delete
                    </button>
                </li>
            ))
            }
        </ul>
    );
};

export default memo(TodoList);