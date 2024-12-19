import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

const Home: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setNewUser({ ...user, id: users.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
        <div className="p-4 mt-8 w-full max-w-4xl mx-auto">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl text-white">Users</h2>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add User
            </button>
          </div>
          <ul className="text-white">
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          {isModalOpen && (
            <UserModal
              onClose={() => setModalOpen(false)}
              onSubmit={handleAddUser}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Home;
