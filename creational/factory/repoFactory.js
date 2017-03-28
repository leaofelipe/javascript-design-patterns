'use strict'

/*
* Repository FACTORY
* USING CACHE to load modules only if wasn't loaded
*/

let RepoFactory = function () {
  let repos = this

  // Loads for Cache
  let repoList = [
    {name: 'task', source: './fixtures/taskRepo'},
    {name: 'user', source: './fixtures/userRepo'},
    {name: 'project', source: './fixtures/projectRepo'}
  ]

  // Caches automacicaly
  repoList.forEach((repo) => {
    repos[repo.name] = require(repo.source)
  })
}

module.exports = new RepoFactory()
