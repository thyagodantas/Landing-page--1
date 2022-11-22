const dev = document.querySelector('a[id="developer-name"]');
dev.innerText = "</Thyago Dantas>";

dev.addEventListener("mouseover", () => {
  dev.innerText = "</Driifas>";
});

dev.addEventListener("mouseout", () => {
  dev.innerText = "</Thyago Dantas>";
});
