const links = [
  { id: "001", url: "https://zjcode.github.io/Processing/Case/001/index.html" },
  { id: "002", url: "https://zjcode.github.io/Processing/Case/002/index.html" },
  { id: "003", url: "https://zjcode.github.io/Processing/Case/003/index.html" },
  { id: "004", url: "https://zjcode.github.io/Processing/Case/004/index.html" },
  { id: "005", url: "https://zjcode.github.io/Processing/Case/005/index.html" },
  { id: "006", url: "https://zjcode.github.io/Processing/Case/006/index.html" },
  { id: "007", url: "https://zjcode.github.io/Processing/Case/007/index.html" },
  { id: "008", url: "https://zjcode.github.io/Processing/Case/008/index.html" },
  { id: "009", url: "https://zjcode.github.io/Processing/Case/009/index.html" },
  { id: "010", url: "https://zjcode.github.io/Processing/Case/010/index.html" },
];

// Get the nav element
const navLinks = document.getElementById("nav-links");

// Generate nav links
links.forEach((link) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.id;
  li.appendChild(a);
  navLinks.appendChild(li);
});
