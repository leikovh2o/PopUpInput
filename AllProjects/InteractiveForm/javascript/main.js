const selectionTab = document.getElementById("selection-tab");
const submit = document.getElementById("submit-btn");
const thankyouTab = document.getElementById("thankyou-tab");
const ratingBtns = document.querySelectorAll(".rating-btn");
const selectedRating = document.getElementById("selected-btn");
let rating = 0;

submit.addEventListener('click', submitResponse);

ratingBtns.forEach(btn => {
  btn.addEventListener('click', handleRatingBtnClick);
})

function submitResponse(){
  selectionTab.classList.add('hidden');
  thankyouTab.classList.add('active');
}

function handleRatingBtnClick(event){
  ratingBtns.forEach(btn => {
    btn.classList.remove("active");
  })
  
  if (event.target.classList.contains('rating-btn')){
    event.target.classList.add("active");
  }else{
    event.target.parentElement.classList.add("active");
  }


  rating = event.target.textContent;
  
  selectedRating.innerHTML = "You selected " + rating + " out of 5";
}