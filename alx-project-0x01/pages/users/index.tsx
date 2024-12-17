import Header from '@/components/layout/Header';

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8 bg-blue-600 text-white shadow-md py-4">
        <h1 className="text-3xl font-bold">Users</h1>
      </main>
    </div>
  );
};

export default Users;
