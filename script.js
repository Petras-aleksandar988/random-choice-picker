const textarea = document.querySelector("#textarea");
const tagsEl = document.querySelector(".tags");
textarea.focus()
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    randomSelect();
  }
});

function createTags(input) {
  let inputTags = input
    .split(",")
    .filter((tag) => tag.trim() !== ",")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  inputTags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.append(tagEl);
  });
}

function randomSelect() {
  const time = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, time * 30);
}

function pickRandomTag() {
  let tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
