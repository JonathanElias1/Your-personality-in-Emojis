const myEmojis = [];
//below grabs the emojiContainer from html and makes it a emojiContainer vairable
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById(`emoji-input`);
const pushBtn = document.getElementById(`push-btn`);
const unshiftBtn = document.getElementById(`unshift-btn`);
const popBtn = document.getElementById(`pop-btn`);
const shiftBtn = document.getElementById(`shift-btn`);
const emojisLocalStorage = JSON.parse(localStorage.getItem("myEmojis"));

if (leadsFromLocalStorage) {
  myEmojis = emojisLocalStorage;
  render(myEmojis);
}

function renderEmojis() {
  //below clears the container out first before we put an emoji
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    //for the entire loop we make emoji = to the position of the span where the text content
    //of the text equals the current value of the array
    //then we take the container and add the emoji variable to it to make it be within that span area
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();
//add emoji to end
pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    //below pushes the new typed value into the myEmojis array
    myEmojis.push(emojiInput.value);
    //below makes the text field empty after typing something and pressing enter
    emojiInput.value = "";
    renderEmojis();
  }
});
//add emoji to beginning
unshiftBtn.addEventListener(`click`, function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
  }
});

//remove last emoji
popBtn.addEventListener(`click`, function () {
  {
    myEmojis.pop();
    renderEmojis();
  }
});

//remove first emoji
shiftBtn.addEventListener(`click`, function () {
  {
    myEmojis.shift();
    renderEmojis();
  }
});

//for later save emojis to local storage
//and refactor the code
