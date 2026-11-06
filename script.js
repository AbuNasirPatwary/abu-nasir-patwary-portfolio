// Small progressive enhancement: keep the footer year current.
document.querySelectorAll("#year").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
