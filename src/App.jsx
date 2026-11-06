import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}