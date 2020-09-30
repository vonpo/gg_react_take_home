const STORAGE_KEY = "favourites:v1";

const getAll = () => {
  console.info("get alll");
  const storedItems = window.localStorage.getItem(STORAGE_KEY);

  return storedItems ? JSON.parse(storedItems) : [];
};

const add = (id: string, data: object) => {
  const all = getAll();

  all.push({
    meta: data,
    id,
  });

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

const remove = (id: string) => {
  const all = getAll().filter((item: { id: string }) => item.id !== id);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

export const LocalStorage = {
  add,
  remove,
  getAll,
};
