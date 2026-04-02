const profile = {
  name: "Akash Rao",
  bio: "Aspiring Full Stack Developer 🚀",
  image: "https://i.pravatar.cc/150?img=3",
  skills: ["HTML", "CSS", "JavaScript", "Python"]
};

// Load data into webpage
document.getElementById("name").innerText = profile.name;
document.getElementById("bio").innerText = profile.bio;
document.getElementById("profile-img").src = profile.image;

const skillsList = document.getElementById("skills");

profile.skills.forEach(skill => {
  const li = document.createElement("li");
  li.innerText = skill;
  skillsList.appendChild(li);
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}