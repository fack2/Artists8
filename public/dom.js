document.getElementById('searchImg').addEventListener('click', e => {
  const search = document.getElementById('searchInput').value
  document.getElementById('aImg').href = `/search/${search}`
})
