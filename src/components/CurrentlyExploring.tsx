export default function CurrentlyExploring() {
  const interests = [
    {
      title: "Computer Vision Systems",
      description: "Implementing object detection and video analysis for practical applications",
    },
    {
      title: "AI Integration",
      description: "Building intelligent features into production applications",
    },
    {
      title: "Real-time Systems",
      description: "Developing low-latency communication platforms",
    },
    {
      title: "Full-stack Architecture",
      description: "Designing scalable, maintainable systems from frontend to deployment",
    },
    {
      title: "Cloud Deployment",
      description: "Optimizing applications for production environments",
    },
  ];

  return (
    <section className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Currently Exploring
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-cyan-400 transition-colors">
              {interest.title}
            </h3>
            <p className="text-gray-400 text-sm">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
