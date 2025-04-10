import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        </div>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">Stats Card 1</div>
          <div className="bg-white p-6 rounded-lg shadow">Stats Card 2</div>
          <div className="bg-white p-6 rounded-lg shadow">Stats Card 3</div>
        </div>
      </main>
    </div>
  );
}
