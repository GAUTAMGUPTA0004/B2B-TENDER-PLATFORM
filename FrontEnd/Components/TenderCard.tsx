type TenderProps = {
  title: string;
  description: string;
  deadline: string;
  budget: number;
};

export default function TenderCard({ title, description, deadline, budget }: TenderProps) {
  return (
    <div className="border p-4 rounded shadow bg-white mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm">🕒 Deadline: {new Date(deadline).toLocaleDateString()}</p>
      <p className="text-sm">💰 Budget: ₹{budget}</p>
    </div>
  );
}