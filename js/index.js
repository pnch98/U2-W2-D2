const hideSection = document.getElementById("hide-1");
hideSection.addEventListener("click", function () {
  const collapsable = document.getElementById("collapse-1");
  collapsable.classList.toggle("d-none");
  if (Array.from(collapsable.classList).includes("d-none")) {
    hideSection.innerText = "Mostra sezione";
  } else {
    hideSection.innerText = "Nascondi sezione";
  }
});

const hideSection2 = document.getElementById("hide-2");
hideSection2.addEventListener("click", function () {
  const collapsable2 = document.getElementById("collapse-2");
  collapsable2.classList.toggle("d-none");
  if (Array.from(collapsable2.classList).includes("d-none")) {
    hideSection2.innerText = "Mostra sezione";
  } else {
    hideSection2.innerText = "Nascondi sezione";
  }
});
