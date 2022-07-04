import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      // db.createObjectStore('jate', { autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jate = await openDB('jate', 1);
  const tx = jate.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content }); // becasue the id in this object matches the id set in the key path.
  const result = await request;

  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jate = await openDB('jate', 1);
  const tx = jate.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;

  console.log('result.value', result);
  return result;
};

initdb();
