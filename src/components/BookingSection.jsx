import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { appointmentApi } from "../api";

export default function BookingSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    sex: "",
    appointmentAt: null,
    remarks: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { minTime, maxTime } = useMemo(() => {
    const base = form.appointmentAt || new Date();
    const min = new Date(base);
    min.setHours(9, 0, 0, 0);
    const max = new Date(base);
    max.setHours(21, 0, 0, 0);
    return { minTime: min, maxTime: max };
  }, [form.appointmentAt]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phoneNumber: digitsOnly }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      if (form.phoneNumber.length !== 10) {
        setError("Enter a valid 10-digit mobile number (no spaces).");
        return;
      }
      const appointmentAt = form.appointmentAt
        ? form.appointmentAt.toISOString().slice(0, 16)
        : "";
      await appointmentApi.create({
        fullName: form.fullName,
        email: form.email,
        phoneNumber: `+91${form.phoneNumber}`,
        age: Number(form.age || 0),
        sex: form.sex,
        appointmentAt,
        remarks: form.remarks
      });
      setSuccess("Appointment request submitted.");
      setForm({
        fullName: "",
        email: "",
        phoneNumber: "",
        age: "",
        sex: "",
        appointmentAt: null,
        remarks: ""
      });
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to submit appointment.");
    } finally {
      setLoading(false);
    }
  };

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
            <form className="grid gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus-within:border-[#2FB7B1]">
                  <span className="mr-2 text-[#6B7280]">+91</span>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={onChange}
                    inputMode="numeric"
                    maxLength={10}
                    aria-invalid={
                      form.phoneNumber.length > 0 && form.phoneNumber.length !== 10
                    }
                    className="w-full bg-transparent text-sm text-[#1F2937] outline-none"
                  />
                </div>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={form.age}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <select
                  name="sex"
                  value={form.sex}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                >
                  <option value="">Select Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <DatePicker
                  selected={form.appointmentAt}
                  onChange={(date) =>
                    setForm((prev) => ({ ...prev, appointmentAt: date }))
                  }
                  placeholderText="Select Date & Time"
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                  dateFormat="dd/MM/yyyy h:mm aa"
                  minDate={new Date()}
                  showTimeSelect
                  timeIntervals={30}
                  timeCaption="Time"
                  minTime={minTime}
                  maxTime={maxTime}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="remarks"
                  placeholder="Remarks"
                  value={form.remarks}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-[#EAF4FB] bg-white px-4 py-3 text-sm text-[#1F2937] shadow-sm focus:border-[#2FB7B1] focus:outline-none"
                />
              </div>
              {error ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                  {error}
                </div>
              ) : null}
              {success ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                  {success}
                </div>
              ) : null}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#FB923C] disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Booking"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
