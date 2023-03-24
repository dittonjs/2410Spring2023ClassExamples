const search = window.location.search.substring(1);
const parts = search.split("&")
const params = {};
parts.forEach((part) => {
  const newParts = part.split('=');
  params[newParts[0]] = newParts[1]
});

console.log(params);