const filterButtons = document.querySelectorAll(".filter-button");
const searchInput = document.querySelector("#article-search");
const postCards = [...document.querySelectorAll(".post-card")];
const emptyState = document.querySelector("#empty-state");

let activeTopic = "all";

function updateArticles() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const card of postCards) {
    const matchesTopic = activeTopic === "all" || card.dataset.topic === activeTopic;
    const matchesSearch = !query || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
    const visible = matchesTopic && matchesSearch;

    card.hidden = !visible;
    if (visible) visibleCount += 1;
  }

  emptyState.hidden = visibleCount > 0;
}

for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeTopic = button.dataset.filter;

    for (const filterButton of filterButtons) {
      const selected = filterButton === button;
      filterButton.classList.toggle("active", selected);
      filterButton.setAttribute("aria-pressed", String(selected));
    }

    updateArticles();
  });
}

searchInput.addEventListener("input", updateArticles);
