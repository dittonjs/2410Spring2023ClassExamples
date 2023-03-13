const SEARCH_RESULTS = [];

const titles = [
  "Lorem Ipsum",
  "Dolor Sit Amet",
  "Consectetur Adipiscing",
  "Elit Sed Do",
  "Eiusmod Tempor",
  "Incididunt Ut",
  "Labore Et",
  "Dolore Magna",
  "Aliqua Ut",
  "Enim Ad Minim"
];

const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
];

for (let i = 0; i < 1000; i++) {
  const title = titles[Math.floor(Math.random() * titles.length)];
  const description = descriptions[Math.floor(Math.random() * descriptions.length)];
  const result = `${title}: ${description}`;
  SEARCH_RESULTS.push(result);
}



function getXRandomResults(data, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * data.length);
    result.push(data[index]);
  }

  return result;
}

function elementFromHTML(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstElementChild;
}
const searchBar = document.getElementById("search-bar")

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  if (searchBar.value === "") {
    const el = document.querySelector(".toast")
    el.innerHTML = "You must type something in order to perform a search";
    el.classList.add("open");
    setTimeout(() => {
      el.classList.remove("open");
      el.innerHTML = "";
    }, 3000);
    return;
  }
  const searchResults = getXRandomResults(SEARCH_RESULTS, 10);
  const output = document.getElementById("search-results");
  output.innerHTML = "";

  searchResults.forEach((r) => {
    output.appendChild(
      elementFromHTML(`
        <div class="search-result">
          ${r}
        </div>
      `)
    )
  });
})

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});
