  function randomInt(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
  }
  function randomColorInt() {
    return randomInt(1, 255);
  }
  function randomColorHex() {
    return randomColorInt().toString(16);
  }

  function getRandomRgbHex() {
    return `${randomColorHex()}${randomColorHex()}${randomColorHex()}`
  }

  function getGhColorChart() {
    var color = getRandomRgbHex(); 
    return `https://ghchart.rshah.org/${color}/saksham324`
  }

  function setGhContributionsChart() {
    document.getElementById("ghContributions").src = getGhColorChart();
  }

  setGhContributionsChart(); 
