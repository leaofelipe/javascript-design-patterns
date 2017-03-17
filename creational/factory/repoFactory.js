'use strict'

/*
* Repository FACTORY
* USING CACHE to load modules only if wasn't loaded
*/

/* OLD ONE */
/* let RepoFactory = function () { */
/*   this.getRepo = function (repoType) { */
/*     if (repoType === 'task') { */
/*       if (this.taskRepo) { */
/*         this.taskRepo.cached = true */
/*         return this.taskRepo */
/*       } else { */
/*         this.taskRepo = require('./fixtures/taskRepo') */
/*         return this.taskRepo */
/*       } */
/*     } */

/*     if (repoType === 'user') { */
/*       let userRepo = require('./fixtures/userRepo') */
/*       return userRepo */
/*     } */

/*     if (repoType === 'project') { */
/*       let projectRepo = require('./fixtures/projectRepo') */
/*       return projectRepo */
/*     } */
/*   } */
/* } */

/* BETTER ONE */
let RepoFactory = function () {
  let repos = this
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
