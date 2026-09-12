export default function StoryCard({ story }) {
  const { student_name, country, university, photo_url, story: text } = story;

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        {photo_url ? (
          <img src={photo_url} alt={student_name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
            {student_name[0]}
          </div>
        )}
        <div>
          <p className="font-bold">{student_name}</p>
          <p className="text-sm text-blue-200">
            {country} {university && `• ${university}`}
          </p>
        </div>
      </div>
      <p className="italic text-blue-100 text-sm line-clamp-4">"{text}"</p>
    </div>
  );
}