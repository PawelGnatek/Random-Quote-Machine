const quotes = [
  {
    text: 'Either write something worth reading or do something worth writing.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Build your own dreams, or someone else will hire you to build theirs.',
    author: 'Farrah Gray',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'Either write something worth reading or do something worth writing.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: ' Benjamin Franklin',
  },
];

const btn = document.querySelector('#new-quote');

const newQuote = function newQuote() {
  let random_index = Math.floor(Math.random() * 6);
  let obj = quotes[random_index];
  console.log(obj);

  let text = document.querySelector('#text');
  let author = document.querySelector('#author');

  (text.innerHTML = obj.text), (author.innerHTML = obj.author);
};

btn.addEventListener('click', newQuote);
