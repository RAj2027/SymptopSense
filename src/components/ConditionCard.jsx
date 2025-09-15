import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon } from '@heroicons/react/solid';

export default function ConditionCard({ condition, severity, probability }) {
  const getSeverityStyles = () => {
    switch (severity) {
      case 'high':
        return {
          bg: 'bg-red-50',
          text: 'text-red-800',
          icon: <ExclamationIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        };
      case 'medium':
        return {
          bg: 'bg-yellow-50',
          text: 'text-yellow-800',
          icon: <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        };
      default:
        return {
          bg: 'bg-green-50',
          text: 'text-green-800',
          icon: <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        };
    }
  };

  const { bg, text, icon } = getSeverityStyles();

  return (
    <div className={`${bg} rounded-lg p-4 mb-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${text}`}>
            {condition}
          </h3>
          <div className="mt-2 text-sm text-gray-700">
            <p>Severity: <span className="capitalize">{severity}</span></p>
            <p>Confidence: {probability}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ConditionCard.defaultProps = {
  severity: 'low',
  probability: 85
};
