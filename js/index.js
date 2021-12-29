const refs = {
  addBtn: document.querySelector('.add-btn'),
  sortByNameBtn: document.querySelector('button[data-action="sort-name"]'),
  sortByValueBtn: document.querySelector('button[data-action="sort-value"]'),
  deleteBtn: document.querySelector('button[data-action="delete"]'),
  xmlBtn: document.querySelector('button[data-action="xml"]'),
  input: document.querySelector('.input'),
  list: document.querySelector('.list'),
};

let sortName = [];
let sortValue = [];
refs.input.addEventListener('input', (e) => {
  if (e.target.value) {
    refs.addBtn.removeAttribute('disabled');
  }
  if (e.target.value === '') {
    refs.addBtn.setAttribute('disabled', 'disabled');
  }
});

const onAddBtnClick = (e) => {
  e.preventDefault();
  refs.sortByValueBtn.removeAttribute('disabled');
  refs.sortByNameBtn.removeAttribute('disabled');
  refs.addBtn.setAttribute('disabled', 'disabled');
  const input = refs.input.value.trim();
  const valueIndex = input.indexOf('=') + 1;
  const endNameIndex = input.indexOf('=');
  const substrName = input.substring(0, endNameIndex).trim();
  const substrValue = input.substring(valueIndex, input.length).trim();
  const upperNameInput = substrName.replace(
    substrName[0],
    substrName[0].toUpperCase()
  );
  const upperValueInput = substrValue.replace(
    substrValue[substrValue.indexOf('=') + 1],
    substrValue[substrValue.indexOf('=') + 1].toUpperCase()
  );

  const markup = `<li class="list-item">${upperNameInput}=${upperValueInput}</li>`;
  refs.list.insertAdjacentHTML('beforeend', markup);
  refs.input.value = '';
  listItem = document.querySelectorAll('.list-item');

  refs.sortByNameBtn.addEventListener('click', () => {
    const firstWord = upperNameInput;
    sortName.push(firstWord);

    const uniqueSorted = sortName
      .sort()
      .filter((firstWord, index, array) => array.indexOf(firstWord) === index);
    const sortByName = uniqueSorted.join('<br>');
    const sortedNameList = `<li class="list-item">${sortByName}</li>`;
    refs.list.innerHTML = sortedNameList;
  });

  refs.sortByValueBtn.addEventListener('click', () => {
    const secondWord = upperValueInput;
    sortValue.push(secondWord);
    const uniqueValues = sortValue
      .sort()
      .filter(
        (secondWord, index, array) => array.indexOf(secondWord) === index
      );
    const sortByValue = uniqueValues.join('<br>');
    const sortedValueList = `<li class="list-item">${sortByValue}</li>`;
    refs.list.innerHTML = sortedValueList;
  });
};
refs.addBtn.addEventListener('click', onAddBtnClick);

// ====== Delete function ===== //

const deleteClick = () => {
  listItem = document.querySelector('.list-item');

  if (listItem) {
    listItem.remove();
    sortName = [];
    sortValue = [];
    refs.sortByNameBtn.setAttribute('disabled', 'disabled');
    refs.sortByValueBtn.setAttribute('disabled', 'disabled');
  }
};

refs.deleteBtn.addEventListener('click', deleteClick);

refs.xmlBtn.addEventListener('click', () => {
  var oSerializer = new XMLSerializer();
  var sXML = oSerializer.serializeToString(refs.list);
  refs.list.textContent = `${sXML}`;
});
