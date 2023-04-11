import { changeFilter } from "Redux/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.todo.filter);

    return (
        <div>
            <p>Filter</p>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
                value={filter}
                onChange={(e) => dispatch(changeFilter(e))}
            />
        </div>
    );
}

export default TodoFilter;