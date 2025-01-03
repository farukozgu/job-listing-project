import React, { useState } from "react";

const AdminPanel = ({ addJob }) => {
  const [job, setJob] = useState({
    logo: "",
    company: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job); // Parent component’e yeni job gönder
    setJob({ logo: "", company: "", description: "" }); // Formu temizle
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="admin-panel flex items-center justify-center mx-auto min-h-60"
    >
      <input
        className="border-inherit border-2 min-h-16 m-10"
        type="text"
        name="logo"
        value={job.logo}
        placeholder="Şirket logosu URL"
        onChange={handleChange}
        required
      />
      <input
        className="border-inherit border-2 min-h-16 m-10"
        type="text"
        name="company"
        value={job.company}
        placeholder="Şirket Adı"
        onChange={handleChange}
        required
      />
      <textarea
        className="border-inherit border-2 min-h-16 m-10"
        name="description"
        value={job.description}
        placeholder="İlan Açıklaması"
        onChange={handleChange}
        required
      />
      <button type="submit" className="border-inherit border-2 min-h-16 m-10">
        İlan Ekle
      </button>
    </form>
  );
};

export default AdminPanel;
