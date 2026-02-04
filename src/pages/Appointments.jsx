import { useEffect, useState } from "react";
import { appointmentApi } from "../api";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await appointmentApi.list();
        setAppointments(data?.appointments || []);
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#EAF4FB] text-[#1F2937] font-sans">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-white/90 p-6 shadow-lg md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#0F2A44]">Appointments</h1>
              <p className="mt-1 text-sm text-[#6B7280]">
                Review and manage incoming appointment requests.
              </p>
            </div>
            <div className="rounded-full bg-[#F97316]/10 px-4 py-2 text-sm font-semibold text-[#F97316]">
              Total: {appointments.length}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#EAF4FB] bg-white shadow-sm">
            {loading ? (
              <div className="p-6 text-sm text-[#6B7280]">Loading...</div>
            ) : error ? (
              <div className="p-6 text-sm text-red-700">{error}</div>
            ) : appointments.length === 0 ? (
              <div className="p-6 text-sm text-[#6B7280]">No appointments yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-[#EAF4FB] text-[#0F2A44]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Email</th>
                      <th className="px-4 py-3 font-semibold">Phone</th>
                      <th className="px-4 py-3 font-semibold">Sex</th>
                      <th className="px-4 py-3 font-semibold">Age</th>
                      <th className="px-4 py-3 font-semibold">Appointment</th>
                      <th className="px-4 py-3 font-semibold">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((item) => (
                      <tr key={item._id} className="border-t border-[#EAF4FB]">
                        <td className="px-4 py-3">{item.fullName || "-"}</td>
                        <td className="px-4 py-3">{item.email || "-"}</td>
                        <td className="px-4 py-3">{item.phoneNumber || "-"}</td>
                        <td className="px-4 py-3">{item.sex || "-"}</td>
                        <td className="px-4 py-3">{item.age ?? "-"}</td>
                        <td className="px-4 py-3">
                          {item.appointmentAt
                            ? new Date(item.appointmentAt).toLocaleString()
                            : "-"}
                        </td>
                        <td className="px-4 py-3">{item.remarks || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
