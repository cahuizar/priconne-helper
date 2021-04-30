let items = [];

const itemAdder = (item, qtn) => {
  const isFound = items.some((el, index) => {
    if (el.id === item.id) {
      items[index].qtn += qtn;
      return true;
    }
    return false;
  });
  if (!isFound) items.push({ ...item, qtn });
};

const formulaItem = (item, qtn) => {
  if (item.formula.length === 0) {
    itemAdder(item, qtn);
    return true;
  }
  return item.formula.map((formItem) => formulaItem(formItem.item, formItem.qtn));
};

const itemsRequiredBuilder = (itemsArr) => {
  items = [];
  if (!Array.isArray(itemsArr) || !itemsArr.length) return items;
  itemsArr.map((item) => formulaItem(item, 1));
  return items;
};

export default itemsRequiredBuilder;
