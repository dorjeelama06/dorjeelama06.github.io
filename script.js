// Keep the footer year current.
document.getElementById("year").textContent = new Date().getFullYear();

// If photo.jpg hasn't been added yet, show initials instead of a broken image.
const img = document.querySelector(".photo img");
function showPlaceholder() {
  const box = document.createElement("div");
  box.className = "placeholder";
  box.textContent = "DL";
  box.setAttribute("role", "img");
  box.setAttribute("aria-label", img.alt);
  img.replaceWith(box);
}
if (img.complete && img.naturalWidth === 0) showPlaceholder();
else img.addEventListener("error", showPlaceholder);
