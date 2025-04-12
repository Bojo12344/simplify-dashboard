import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('create')

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h1 className="text-2xl font-bold">Simplify Admin</h1>
        <button
          onClick={() => setActiveTab('create')}
          className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-700 ${
            activeTab === 'create' && 'bg-gray-700'
          }`}
        >
          Create Business
        </button>
        <button
          onClick={() => setActiveTab('view')}
          className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-700 ${
            activeTab === 'view' && 'bg-gray-700'
          }`}
        >
          View Businesses
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === 'create' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Create New Business</h2>
            <form className="space-y-4 max-w-md">
              <input
                type="text"
                placeholder="Business Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Choose Plan</option>
                <option value="starter">Starter</option>
                <option value="premium">Premium</option>
                <option value="elite">Elite</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Create Business
              </button>
            </form>
          </div>
        )}

        {activeTab === 'view' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">All Businesses</h2>
            <ul className="space-y-3">
              <li className="p-4 bg-white border rounded shadow">
                💼 The Barber Lab – Starter
              </li>
              <li className="p-4 bg-white border rounded shadow">
                🦷 Smile Bright Dental – Premium
              </li>
              <li className="p-4 bg-white border rounded shadow">
                🚗 Fast Lane Auto – Elite
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
