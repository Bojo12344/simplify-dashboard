const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-5 space-y-4">
      <h2 className="text-2xl font-bold mb-4">📊 Dashboard</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">Overview</li>
        <li className="hover:bg-gray-700 p-2 rounded">Analytics</li>
        <li className="hover:bg-gray-700 p-2 rounded">Users</li>
        <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
