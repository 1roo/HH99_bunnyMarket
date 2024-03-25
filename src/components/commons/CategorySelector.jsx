import React from 'react';
import styled from 'styled-components';

const CategorySelector = ({
  showCategories,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  if (!showCategories) return null;

  return (
    <Categories>
      {categories.map((category) => (
        <CategoryButton
          type="button"
          key={category}
          selected={selectedCategory === category}
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </CategoryButton>
      ))}
    </Categories>
  );
};

export default CategorySelector;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 30px;
  color: ${({ selected }) =>
    selected ? '#fff' : '#000'};
  background-color: ${({ selected }) =>
    selected ? '#4d4d4d' : 'transparent'};
  border: 1px solid #4d4d4d;
  cursor: pointer;

  &:hover {
    background-color: #2d2d2d;
    color: #eee;
  }
`;
