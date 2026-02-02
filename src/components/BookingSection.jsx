export default function BookingSection() {
  return (
    <section id="booking" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-white to-[#EAF4FB] p-6 shadow-lg md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#0F2A44]">
                Book an Appointment
              </h2>
              <p className="mt-3 text-sm text-[#6B7280]">
                Share your details and our care team will reach out to confirm your
                appointment.
              </p>
              <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#1E4F8F]">Call Us</p>
                <p className="mt-1 text-lg font-bold text-[#0F2A44]">8277636111</p>
                <p className="mt-3 text-sm text-[#6B7280]">
                  Shiva Shakthi Health (Chronic Disorders and Health Programs)
                </p>
              </div>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Gmail"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <select className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none">
                  <option value="">Select Sex</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  type="date"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="time"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Remarks"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="mt-2 rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#FB923C]"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
