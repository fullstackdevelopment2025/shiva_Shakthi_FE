export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#0F2A44] via-[#1E4F8F] to-[#2FB7B1] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://maps.app.goo.gl/4LLzDodySCTRTqYf9?g_st=iw"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-90"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[#CFEDEA]" />
            Shiva Shakthi Health (Chronic Disorders and Health Programs)
          </a>
          <a href="tel:8277636111" className="flex items-center gap-2 hover:opacity-90">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#CFEDEA]" />
            8277636111
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span>Our Philosophy & Approach</span>
          <span>Case Studies</span>
          <button className="rounded-full bg-white px-4 py-1 font-semibold text-[#0F2A44] shadow">
            Shiva Shakthi Store
          </button>
        </div>
      </div>
    </div>
  );
}
