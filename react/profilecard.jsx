import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    bio: "",
    color: "#ccc",
    skills: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(s => s !== value)
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="bio" onChange={handleChange} />
        <input type="color" name="color" onChange={handleChange} />

        <label><input type="checkbox" value="HTML" onChange={handleChange}/>HTML</label>
        <label><input type="checkbox" value="CSS" onChange={handleChange}/>CSS</label>
        <label><input type="checkbox" value="JavaScript" onChange={handleChange}/>JS</label>
        <label><input type="checkbox" value="React" onChange={handleChange}/>React</label>
      </div>

      <ProfileCard {...form} />
    </div>
  );
}

function ProfileCard({ name, title, bio, color, skills }) {
  return (
    <div className="card">
      <div style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: color }}></div>
      <h2>{name || "Your Name"}</h2>
      <p>{title}</p>
      <p>{bio}</p>
      <div>
        {skills.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
