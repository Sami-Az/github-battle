export function fetchPopularRepos(langauge) {
  const endpoint = window.encodeURI(`http://api.github.com/search/repositories?q=stars:>1+language:${langauge}&sort=stars&order=desc&type=Repositories`)

  return fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    if(!data.items) {
      throw new Error(data.message)
    }

    return data.items
  })
}
