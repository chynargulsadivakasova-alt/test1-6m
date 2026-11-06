import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api/users';

export default function UsersPage() {
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Загрузка пользователей...</div>;
  if (isError) return <div>Ошибка при загрузке: {error.message}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ margin: '8px 0' }}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}