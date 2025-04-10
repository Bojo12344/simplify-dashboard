import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">📊 Simplify Dashboard</h1>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Login</button>
          <button className="border px-4 py-2 rounded hover:bg-gray-200 transition">Sign up</button>
        </div>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">📈 Analytics</h2>
            <p className="text-sm text-gray-600 mt-2">Call insights, response rates, and scheduling data.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">🗓️ Appointments</h2>
            <p className="text-sm text-gray-600 mt-2">View upcoming appointments and callbacks.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">💬 AI Responses</h2>
            <p className="text-sm text-gray-600 mt-2">See how your AI handles calls and leads.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
