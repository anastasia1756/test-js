const refs = {
  addBtn: document.querySelector('.add-btn'),
  sortByNameBtn: document.querySelector('button[data-action="sort-name"]'),
  sortByValueBtn: document.querySelector('button[data-action="sort-value"]'),
  deleteBtn: document.querySelector('button[data-action="delete"]'),
  xmlBtn: document.querySelector('button[data-action="xml"]'),
  input: document.querySelector('.input'),
  textarea: document.querySelector('.textarea'),
};

const onAddBtnClick = (e) => {
  e.preventDefault();
  console.log('add');
  refs.textarea.value = refs.input.value;
  refs.input.value = '';
};
refs.addBtn.addEventListener('click', onAddBtnClick);
