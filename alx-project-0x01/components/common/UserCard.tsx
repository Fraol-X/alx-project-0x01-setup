import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">
        Website:{" "}
        <a href={`https://${website}`} className="text-blue-500 hover:underline">
          {website}
        </a>
      </p>
      <p className="text-gray-600 mb-2">Company: {company.name}</p>
      <p className="text-gray-600">Address: {address.street}, {address.suite}, {address.city}</p>
    </div>
  );
};

export default UserCard;
