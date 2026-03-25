<<<<<<< HEAD

=======
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-4">
      <h4 className="text-dark-gray-2 text-[14px] mb-2">{title}</h4>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type={inputType}
            id={option.value || option.text}
            name={title}
            value={option.value || option.text}
            className="w-[22px] h-[22px] mr-2"
          />
          <label htmlFor={option.value || option.text} className="text-dark-gray-2">
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default FilterGroup;
=======
export default FilterGroup;
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
