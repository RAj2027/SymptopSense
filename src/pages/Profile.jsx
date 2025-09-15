import { UserCircleIcon, MailIcon, CalendarIcon, PhoneIcon, PencilIcon } from '@heroicons/react/outline';

export default function Profile() {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2023',
    phone: '(555) 123-4567',
    age: 32,
    bloodType: 'A+',
    height: '175 cm',
    weight: '70 kg',
    lastCheckup: '2025-08-15',
    conditions: ['None'],
    allergies: ['Penicillin', 'Pollen']
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserCircleIcon className="h-16 w-16 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
                </div>
              </div>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <MailIcon className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                {user.email}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <PhoneIcon className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                {user.phone}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.age} years</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Blood Type</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.bloodType}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Height</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.height}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Weight</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.weight}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Last Checkup</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <CalendarIcon className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                {new Date(user.lastCheckup).toLocaleDateString()}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Medical Conditions</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {user.conditions.length > 0 ? user.conditions.join(', ') : 'None'}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Allergies</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {user.allergies.length > 0 ? user.allergies.join(', ') : 'None'}
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              View full medical history<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
