import { useState } from "react";
import { Save } from "lucide-react";

const Settings = () => {
  const [formData, setFormData] = useState({
    schoolName: "Alliance School",
    email: "info@allianceschool.com",
    phone: "+91 XXXXX XXXXX",
    address: "",
    mapUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("School Settings:", formData);

    // Backend API will be connected later
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        School Settings
      </h1>

      <p className="mt-2 text-slate-500">
        Update general information displayed on the website.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700">
              School Name
            </label>

            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Google Maps Embed URL
            </label>

            <input
              type="text"
              name="mapUrl"
              value={formData.mapUrl}
              onChange={handleChange}
              placeholder="Paste Google Maps embed URL"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">
              School Address
            </label>

            <textarea
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter complete school address"
              className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white hover:bg-blue-700"
        >
          <Save size={18} />
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
