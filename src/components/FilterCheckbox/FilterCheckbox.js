import './FilterCheckbox.css'


const FilterCheckbox = () => {
    return (
        <div className="filter-checkbox">
            <input className="filter-checkbox__checkbox" type="checkbox"/>
            <label className="filter-checkbox__label">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;