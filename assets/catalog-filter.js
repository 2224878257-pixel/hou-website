const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let visible = 0;
  cards.forEach(card => {
    card.hidden = button !== buttons[0] && card.dataset.category !== button.textContent;
    if (!card.hidden) visible++;
  });
  document.querySelector('#empty').hidden = visible > 0;
}));
