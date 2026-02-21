import React from 'react';

export default function Page() {
  return (
    <>
      <main className="min-h-screen">
        <header className="max-w-4xl mx-auto p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-brand">Chris Caldwell</h1>
              <p className="mt-1 text-sm text-brand">Candidate for Mayor — Findlay, Ohio (2027)</p>
            </div>
            <nav className="space-x-4">
              <a href="#about" className="text-sm text-brand hover:underline">About</a>
              <a href="#issues" className="text-sm text-brand hover:underline">Issues</a>
              <a href="#contact" className="text-sm text-brand hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-12">
          <section className="rounded-lg p-8 shadow-brand bg-brand">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-brand">Vote for kindness, community, the neighborly candidate</h2>
              <p className="mt-4 text-brand">Join Chris Caldwell in putting kindness and community first for Findlay, Ohio.</p>
              <div className="mt-6 flex gap-3 justify-center">
                <a href="mailto:contact@voteforkindness.com" className="px-4 py-2 rounded border border-brand-light text-brand-light font-medium hover:bg-brand-light hover:text-brand transition">Contact Campaign</a>
                <a href="mailto:chris@voteforkindness.com" className="px-4 py-2 rounded border border-brand-light text-brand-light font-medium hover:bg-brand-light hover:text-brand transition">Email Chris</a>
              </div>
            </div>
          </section>

          <section id="about" className="mt-8 bg-brand rounded-lg p-6 shadow-brand">
            <h3 className="text-xl font-semibold text-brand">About Chris</h3>
            <p className="mt-3 text-brand">Chris Caldwell is a neighbor-first leader focused on kindness, pragmatic community solutions, and building relationships across Findlay. Chris believes strong communities are built by neighbors helping neighbors.</p>
          </section>

          <section id="issues" className="mt-8 bg-brand rounded-lg p-6 shadow-brand">
            <h3 className="text-xl font-semibold text-brand">Key Priorities</h3>
            <ul className="mt-3 text-brand list-disc list-inside space-y-2">
              <li>Community safety and supportive neighborhood programs</li>
              <li>Local business support and economic opportunity</li>
              <li>Parks, public spaces, and community engagement</li>
            </ul>
          </section>

          <section id="contact" className="mt-8 bg-brand rounded-lg p-6 shadow-brand">
            <h3 className="text-xl font-semibold text-brand">Get Involved</h3>
            <p className="mt-3 text-brand">Volunteer, donate, or simply say hello — every conversation matters.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <strong className="w-24 text-brand">General:</strong>
                <a href="mailto:contact@voteforkindness.com" className="text-brand hover:underline">contact@voteforkindness.com</a>
              </div>
              <div className="flex items-center gap-3">
                <strong className="w-24 text-brand">Direct:</strong>
                <a href="mailto:chris@voteforkindness.com" className="text-brand hover:underline">chris@voteforkindness.com</a>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t mt-12 py-6 bg-brand">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm text-brand">
            <div>© 2026 Chris Caldwell — Findlay, Ohio</div>
            <div className="mt-2">
              <a href="https://github.com/CodeByDex/vote-for-kindness-web" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Website by CodeByDex</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
