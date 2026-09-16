import { processSteps } from "../DataT/siteData";

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-extrabold text-center">Your Study Abroad Journey</h2>

        <div className="flex flex-wrap justify-start md:justify-center gap-4 mt-12">
          {processSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                {i + 1}
              </div>
              <span className="font-medium">{step}</span>
              {i < processSteps.length - 1 && <span className="text-gray-300 mx-1">—</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}