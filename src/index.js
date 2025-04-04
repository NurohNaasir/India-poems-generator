function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,   
      delay: 1,
      cursor: "",
    });
  }
  function generatePoem(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "8eo62f25aba83t4470e30bac260f6e42";
    let context =
 "You are a romantic poem expert and love to write short poems.Your mission is to generata a 4 line poem in basic HTML and seperate each line with a <br />.Make sure to follow the user instructions.Do not include a title to the poem.Sign the poem with 'Nurohs AI'inside a <strong>element at the end of the poem and NOT at the beginning";
 let prompt = `User instructions: Generate an India poem about ${instructionsInput.value}`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an India poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);