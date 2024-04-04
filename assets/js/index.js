const summaryScore = document.getElementById("summary-score");
let summaryData;

function fetchJSONData() {
  fetch("./data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      addScoreData(data, summaryScore);
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

fetchJSONData();

// Functions
const createImgElement = (src, alt) => {
  const img = document.createElement("img");

  img.setAttribute("src", src);
  img.setAttribute("alt", alt);

  return img;
};

const createSpanElement = (text, className) => {
  const span = document.createElement("span");

  span.innerText = text;

  if (className !== undefined) {
    span.classList.add(className);
  }

  return span;
};

const appendChilds = (parent, ...childs) => {
  childs.forEach((child) => {
    parent.appendChild(child);
  });
};

const addScoreData = (scoreData, div) => {
  scoreData.map((data) => {
    const p = document.createElement("p");
    const span1 = createSpanElement(data.category, "category");
    const span2 = createSpanElement(data.score, "category-score");
    const span3 = createSpanElement(" / 100", "fullscore");
    const img = createImgElement(data.icon);

    p.classList.add(data.category.toLowerCase());

    span1.appendChild(img);
    span2.appendChild(span3);

    appendChilds(p, span1, span2);
    div.appendChild(p);
  });
};
