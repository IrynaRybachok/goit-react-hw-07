import { FaMagnifyingGlass } from "react-icons/fa6";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <>
      <div className={s.container}>
        <p className={s.text}>Find contacts by name</p>
        <FaMagnifyingGlass className={s.icon} size="20" />
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;
