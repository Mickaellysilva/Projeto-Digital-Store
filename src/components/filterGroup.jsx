import React from 'react';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-6">
      {/* Título do grupo de filtros - Requisito: 14px e dark-gray-2 */}
      <h4 className="text-[14px] font-bold text-dark-gray-2 mb-4 uppercase tracking-wider">
        {title}
      </h4>
      
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type={inputType} // checkbox ou radio
            id={option.value || option.text}
            name={title} // Importante para o 'radio' funcionar em grupo
            value={option.value || option.text}
            /* Requisito: 22px de largura/altura e cor primary */
            className="w-[22px] h-[22px] mr-2 accent-primary cursor-pointer"
          />
          <label 
            htmlFor={option.value || option.text} 
            className="text-dark-gray-2 text-[14px] cursor-pointer hover:text-primary transition-colors"
          >
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterGroup;