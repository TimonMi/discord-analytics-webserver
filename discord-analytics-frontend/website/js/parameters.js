function insertParam(key, value) {
  key = encodeURI(key);
  value = encodeURI(value);
  if (window.location.pathname.endsWith('/')) {
    window.location.search = `${key}=${value}`;
  } else {
    window.location.href += `/?${key}=${value}`;
  }
}
