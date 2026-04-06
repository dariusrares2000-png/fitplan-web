import React from 'react';
import { Exercise } from '../types';

const ExerciseCard: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  return <div>{exercise.name}</div>;
};

export default ExerciseCard;