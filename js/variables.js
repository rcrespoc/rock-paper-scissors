const d = document,
  ls = localStorage,
  $btnRules = d.querySelector("button.rules"),
  $rulesModal = d.querySelector(".rules-modal"),
  $btnClose = d.querySelector(".btn-close"),
  $items = d.querySelectorAll(".item"),
  $mainMenu = d.querySelector(".main-menu"),
  $resultsMenu = d.querySelector(".results-menu"),
  $user = d.querySelector(".user"),
  $house = d.querySelector(".house"),
  $score = d.querySelector("#score-number"),
  $ganador = d.querySelector("#ganador"),
  $btnPlay = d.querySelector(".btn-play"),
  combinaciones = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["scissors", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  },
  fondosImagenes = {
    scissors: ["images/icon-scissors.svg", "var(--scissors-gradient)"],
    paper: ["images/icon-paper.svg", "var(--paper-gradient)"],
    rock: ["images/icon-rock.svg", "var(--rock-gradient)"],
    lizard: ["images/icon-lizard.svg", "var(--lizard-gradient)"],
    spock: ["images/icon-spock.svg", "var(--cyan)"],
  };
export {
  d,
  ls,
  $btnRules,
  $rulesModal,
  $btnClose,
  $items,
  $mainMenu,
  $resultsMenu,
  $user,
  $house,
  $score,
  $ganador,
  $btnPlay,
  combinaciones,
  fondosImagenes,
};
