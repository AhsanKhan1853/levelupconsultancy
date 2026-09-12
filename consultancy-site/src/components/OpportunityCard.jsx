export default function OpportunityCard({ opportunity }) {
  const { title, country, university, course, description, image_url, deadline, is_hot } = opportunity;

  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white">
      {image_url && <img src={image_url} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-5">
        {is_hot && (
          <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            🔥 Hot Opportunity
          </span>
        )}
        <h3 className="font-bold text-lg text-primary">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {country} {university && `• ${university}`} {course && `• ${course}`}
        </p>
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">{description}</p>
        {deadline && (
          <p className="text-xs text-gray-400 mt-3">Deadline: {new Date(deadline).toLocaleDateString()}</p>
        )}
        <a href="#contact" className="inline-block mt-4 text-accent font-semibold text-sm">
          Apply Now →
        </a>
      </div>
    </div>
  );
}