var review_container = document.querySelector(".review-container")
var unhappy = document.querySelector('.unhappy');
var neutral = document.querySelector('.neutral');
var satisfied = document.querySelector('.satisfied');
var selected_rating;
var send_btn = document.getElementById('send-btn')
unhappy.addEventListener('click', () => {
  selected_rating = "unhappy";
  unhappy.classList.add('active');
  console.log(selected_rating);
})

neutral.addEventListener('click', () => {
  selected_rating = "neutral";
  neutral.classList.add('active');
  console.log(selected_rating);
})

satisfied.addEventListener('click', () => {
  selected_rating = "satisfied";
  satisfied.classList.add('active');
  console.log(selected_rating);
})

send_btn.addEventListener('click', () => {
  review_container.innerHTML = `
  <i class="fa-solid fa-heart"></i>
  <h2 class="thanks">Thank You! </h2>
  <strong class="feedback">Feedback: ${selected_rating}</strong>
  <p class="message">We'll use your feedback to improve our customer support<p>
  `
})