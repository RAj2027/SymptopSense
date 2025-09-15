import { useState } from 'react';

export default function InputForm({ onSubmit }) {
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptoms.trim()) {
      onSubmit(symptoms);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
          Describe your symptoms
        </label>
        <div className="mt-1">
          <textarea
            id="symptoms"
            name="symptoms"
            rows={6}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
            placeholder="E.g., I've had a headache and fever for the past two days..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Analyze Symptoms
        </button>
      </div>
    </form>
  );
}
