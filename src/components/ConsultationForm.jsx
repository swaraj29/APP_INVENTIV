import React, { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    idea: '',
    nda: false,
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12 text-white"
      style={{
        backgroundImage: "url('/src/assets/consultation-bg.png')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A0CA3] via-[#00040F] to-[#03045E] opacity-90 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-semibold leading-[1.2] mb-4 text-white">
            Our Technology<br />
            Experts Are Change<br />
            Catalysts
          </h1>
          <p className="text-base font-light text-white">
            Book A Free Consultation Call With Our Experts Today
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#0B0B0B] rounded-2xl p-10 shadow-lg w-full max-w-xl"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-transparent border border-[#2E2E2E] text-white placeholder-white focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail ID*"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#2E2E2E] text-white placeholder-white focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number*"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#2E2E2E] text-white placeholder-white focus:outline-none"
              onChange={handleChange}
            />
            <select
              name="budget"
              required
              className="w-full p-3 rounded-md bg-transparent border border-[#2E2E2E] text-white placeholder-white focus:outline-none"
              onChange={handleChange}
              defaultValue=""
            >
              <option value="" disabled>Select a Budget Range</option>
              <option value="<$5k">Less than $5,000</option>
              <option value="$5k-$20k">$5,000 - $20,000</option>
              <option value=">$20k">More than $20,000</option>
            </select>
            <textarea
              name="idea"
              required
              rows="4"
              placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*"
              className="w-full p-3 rounded-md bg-transparent border border-[#2E2E2E] text-white placeholder-white focus:outline-none"
              onChange={handleChange}
            ></textarea>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  name="nda"
                  className="mr-2 accent-white"
                  onChange={handleChange}
                />
                Include Copy of a Non-Disclosure Agreement
              </label>

              <div className="flex items-center gap-2">
                <span className="text-white">7 + 2 =</span>
                <input
                  type="text"
                  name="captcha"
                  required
                  className="w-14 h-10 text-center rounded-md bg-transparent border border-[#2E2E2E] text-white focus:outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#2D2D2D] hover:bg-[#444444] p-3 rounded-md text-white font-medium transition-colors"
            >
              Request Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
