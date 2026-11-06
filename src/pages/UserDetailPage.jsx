import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '../api/users';

export default function UserDetailPage() {
  const { id } = useParams();

  const { data: user, isLoading, isError, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, 
  });

  if (isLoading) return <div>Загрузка данных пользователя...</div>;
  if (isError) return <div>Ошибка: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/users">← Назад к списку</Link>
      
      <h2>Детали пользователя</h2>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Город:</strong> {user.address?.city}</p>
    </div>
  );
}