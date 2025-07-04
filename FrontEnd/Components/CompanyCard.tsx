type CompanyProps = {
  name: string;
  industry: string;
  description: string;
  logoUrl?: string;
};

export default function CompanyCard({ name, industry, description, logoUrl }: CompanyProps) {
  return (
    <div className="border p-4 rounded shadow bg-white mb-4 flex items-start space-x-4">
      {logoUrl && <img src={logoUrl} alt={name} className="w-16 h-16 object-cover rounded" />}
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{industry}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
}