export default function BuildingFromZero() {
  return (
    <section className="mb-20 pb-12 border-b border-white/10">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Building From Zero
      </h2>
      <p className="text-gray-300 leading-relaxed text-lg mb-4">
        I own the full stack — from schema design and AI pipeline architecture to the UI that
        ships to real users. Every project in this portfolio was built alone, from an empty
        directory, without boilerplate or starter templates.
      </p>
      <p className="text-gray-500 leading-relaxed text-base">
        That means I&apos;ve debugged RAG hallucinations at 2am, rewritten authentication flows
        mid-sprint, and optimised database queries until p95 latency dropped below 100ms.
        I care about systems that actually work in production, not just in demos.
      </p>
    </section>
  );
}
