export default function TenderCard({ 
  title, 
  description, 
  deadline, 
  budget, 
  companyName, 
  companyLogo, 
  companyIndustry 
}) {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-3">{description}</p>
        </div>
        
        {/* Company Info */}
        {companyName && (
          <div className="flex items-center ml-4 bg-gray-50 p-3 rounded-lg">
            {companyLogo && (
              <img 
                src={companyLogo} 
                alt={companyName} 
                className="w-10 h-10 object-cover rounded-full mr-3"
              />
            )}
            <div>
              <div className="font-semibold text-sm">{companyName}</div>
              {companyIndustry && (
                <div className="text-xs text-gray-600">{companyIndustry}</div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <p className="text-sm text-gray-700">
            🕒 Deadline: {new Date(deadline).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-700">
            💰 Budget: ₹{budget.toLocaleString()}
          </p>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}