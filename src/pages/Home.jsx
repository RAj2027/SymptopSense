import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to HealthAI</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get instant health insights by describing your symptoms. Our AI will analyze them and provide you with possible conditions and recommendations.
          </p>
          <Link
            to="/symptom-check"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start Symptom Check
          </Link>
        </div>
      </main>
    </div>
  );
}
