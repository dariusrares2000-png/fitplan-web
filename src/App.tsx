import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import WorkoutPage from './pages/WorkoutPage';
import MealPlanPage from './pages/MealPlanPage';
import RecipePage from './pages/RecipePage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <LoginPage />
        <DashboardPage />
        <WorkoutPage />
        <MealPlanPage />
        <RecipePage />
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;