const Card = ({ title, stat }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{stat}</p>
    </div>
  );
};

export default Card;
