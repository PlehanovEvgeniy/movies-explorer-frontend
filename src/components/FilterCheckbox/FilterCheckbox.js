import './FilterCheckbox.css'

const FilterCheckbox = ({checked, onChange}) => {
  const handleChange = () => {
    onChange(!checked);
  }

  return (
    <div className="filter-checkbox">
      <input
          className="filter-checkbox__checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
      />
      <label className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
