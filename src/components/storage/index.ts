const STORAGE_KEY = "fav-app:v1";

/**
 * Get all local storage elements.
 */
const getAll = () => {
  const storedItems = window.localStorage.getItem(STORAGE_KEY);

  return storedItems ? JSON.parse(storedItems) : [];
};

/**
 * Set item to local storage.
 *
 * @param {string} id
 * @param {Object} data
 */
const add = (id: string, data: object) => {
  const all = getAll();

  all.push({
    meta: data,
    id,
  });

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

/**
 * Remove item from local storage.
 *
 * @param {string} id
 */
const remove = (id: string) => {
  const all = getAll().filter((item: { id: string }) => item.id !== id);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

export const LocalStorage = {
  add,
  remove,
  getAll,
};
