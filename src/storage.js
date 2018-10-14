const key = 'tr-day-form';

export const get = () => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return {};
};

export const set = data => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
};
