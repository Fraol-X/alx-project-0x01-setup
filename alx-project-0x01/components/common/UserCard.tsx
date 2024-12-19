import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white">
      <h2 className="text-lg font-bold">{name} ({username})</h2>
      <p className="text-gray-600"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-600"><strong>Website:</strong> 
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {website}
        </a>
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
      <p className="text-gray-600">
        <strong>Company:</strong> {company.name} - {company.catchPhrase}
      </p>
    </div>
  );
};

export default UserCard;
