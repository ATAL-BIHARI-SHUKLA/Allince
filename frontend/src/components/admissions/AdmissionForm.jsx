import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const initialFormData = {
  studentName: "",
  dateOfBirth: "",
  gender: "",
  applyingClass: "",
  previousSchool: "",
  parentName: "",
  relationship: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

const AdmissionForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend API will be connected later
    console.log("Admission Application:", formData);

    setSubmitted(true);
    setFormData(initialFormData);
  };

  if (submitted) {
    return (
      <section id="admission-form" className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="rounded-3xl border border-green-200 bg-green-50 p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={32} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Application Submitted Successfully
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Thank you for applying to Alliance School. Our administration will
              review your application and contact you using the provided phone
              number or email address.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admission-form" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Apply Online
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Admission Application Form
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Please provide accurate information. Our school administration will
            contact you regarding the next steps.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10"
        >
          {/* Student Details */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Student Details
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="studentName"
                  className="text-sm font-medium text-slate-700"
                >
                  Student Full Name *
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student's full name"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="text-sm font-medium text-slate-700"
                >
                  Date of Birth *
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="text-sm font-medium text-slate-700"
                >
                  Gender *
                </label>

                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="applyingClass"
                  className="text-sm font-medium text-slate-700"
                >
                  Applying for Class *
                </label>

                <select
                  id="applyingClass"
                  name="applyingClass"
                  required
                  value={formData.applyingClass}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="previousSchool"
                  className="text-sm font-medium text-slate-700"
                >
                  Previous School
                </label>

                <input
                  id="previousSchool"
                  name="previousSchool"
                  type="text"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  placeholder="Enter previous school name, if applicable"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Parent Details */}
          <div className="mt-10 border-t border-slate-200 pt-10">
            <h3 className="text-xl font-semibold text-slate-900">
              Parent / Guardian Details
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="parentName"
                  className="text-sm font-medium text-slate-700"
                >
                  Parent / Guardian Name *
                </label>

                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent or guardian name"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="relationship"
                  className="text-sm font-medium text-slate-700"
                >
                  Relationship *
                </label>

                <select
                  id="relationship"
                  name="relationship"
                  required
                  value={formData.relationship}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian">Guardian</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-700"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-slate-700"
                >
                  Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Additional Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write any additional information or question"
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Submit Application
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;
