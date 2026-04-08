document.getElementById("profileForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const bio = document.getElementById("bio").value;
  const color = document.getElementById("color").value;
  const error = document.getElementById("error");

  if (!name || !title) {
    error.textContent = "Name and Job Title are required";
    return;
  }

  error.textContent = "";

  document.getElementById("main-title").textContent = name;
  document.getElementById("card-title").textContent = title;
  document.getElementById("card-bio").textContent = bio;
  document.getElementById("avatar").style.backgroundColor = color;

  const skillsContainer = document.getElementById("skills");
  skillsContainer.innerHTML = "";

  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

  checkboxes.forEach(cb => {
    const span = document.createElement("span");
    span.textContent = cb.value;
    skillsContainer.appendChild(span);
  });
});

// BONUS: Live name update

document.getElementById("name").addEventListener("input", function(e) {
  document.getElementById("main-title").textContent = e.target.value;
});

