import { useState } from 'react';
import { CalendarIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/outline';

export default function Reports() {
  // Mock data for past reports
  const [reports] = useState([
    {
      id: 1,
      date: '2025-09-10',
      symptoms: 'Headache, fever, and fatigue',
      conditions: ['Common Cold', 'Allergic Rhinitis'],
      severity: 'Medium'
    },
    {
      id: 2,
      date: '2025-08-25',
      symptoms: 'Sore throat and cough',
      conditions: ['Pharyngitis'],
      severity: 'Low'
    },
    {
      id: 3,
      date: '2025-08-10',
      symptoms: 'Stomach pain and nausea',
      conditions: ['Gastroenteritis'],
      severity: 'Medium'
    }
  ]);

  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Health Reports</h1>
        <p className="mt-2 text-lg text-gray-600">
          View your past symptom checks and results
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {reports.map((report) => (
            <li key={report.id}>
              <div 
                className="block hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedReport(report)}
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {report.symptoms}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${report.severity === 'High' ? 'bg-red-100 text-red-800' : 
                          report.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {report.severity}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {new Date(report.date).toLocaleDateString()}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <DocumentTextIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {report.conditions.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedReport && (
        <div className="fixed inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setSelectedReport(null)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Report Details
                  </h3>
                  <div className="mt-4 text-left">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500">Date</h4>
                      <p className="mt-1 text-sm text-gray-900">{new Date(selectedReport.date).toLocaleDateString()}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500">Symptoms</h4>
                      <p className="mt-1 text-sm text-gray-900">{selectedReport.symptoms}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500">Possible Conditions</h4>
                      <ul className="mt-1 text-sm text-gray-900 list-disc list-inside">
                        {selectedReport.conditions.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Severity</h4>
                      <p className="mt-1 text-sm text-gray-900">{selectedReport.severity}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => setSelectedReport(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
