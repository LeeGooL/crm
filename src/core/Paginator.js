import EventEmitter from "./EventEmitter.js";

class Paginator extends EventEmitter {
  $root = null;
  $countOfPages = 1;
  $currentPage = 1;

  constructor(root, countOfPages, currentPage) {
    super();

    this.$root = root;
    this.$countOfPages = countOfPages;
    this.$currentPage = currentPage;

    this.update();
  }

  update() {
    const ul = document.createElement("ul");
    ul.className = "pagination justify-content-center";

    const backButton = document.createElement("li");
    backButton.className = "page-item";

    const backLink = document.createElement("a");
    backLink.className = "page-link";
    backLink.textContent = "Назад";
    backLink.tabIndex = -1;
    backLink.href = "#";

    if (this.$currentPage === 1) {
      backButton.classList.add("disabled");
    }

    backLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.emit("page", this.$currentPage - 1);
    });

    backButton.append(backLink);

    ul.append(backButton);

    for (let i = 1; i <= this.$countOfPages; i++) {
      const li = document.createElement("li");
      li.className = "page-item";

      const a = document.createElement("a");
      a.className = "page-link";
      a.href = "#";
      a.tabIndex = "-1";
      a.textContent = i;

      if (i === this.$currentPage) {
        li.classList.add("active");
      }

      a.addEventListener("click", (e) => {
        e.preventDefault();
        this.emit("page", i);
      });

      li.append(a);
      ul.append(li);
    }

    const forwardButton = document.createElement("li");
    forwardButton.className = "page-item";

    const forwardLink = document.createElement("a");
    forwardLink.className = "page-link";
    forwardLink.textContent = "Вперед";
    forwardLink.tabIndex = -1;
    forwardLink.href = "#";

    if (this.$currentPage === this.$countOfPages) {
      forwardButton.classList.add("disabled");
    }

    forwardLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.emit("page", this.$currentPage + 1);
    });

    forwardButton.append(forwardLink);

    ul.append(forwardButton);

    this.$root.append(ul);
  }
}

export default Paginator;
