import React from 'react';
import { Recipe } from '../types';

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return <div>{recipe.title}</div>;
};

export default RecipeCard;