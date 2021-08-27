# Contribution Guidelines

## Table of Content

- [Git Commands](#git-commands)

## Git Commands

### Add one file to the working tree

`git add /path/of/file/to/add`

### Add all files to the working tree

`git add .`

### Commit changes

`git commit -m "commit message"`

### Fetch lastest changes and heads from remote repository

`git fetch <remote>`, where `<remote>` can be empty if `origin` was configured or another remote repository to fetch from.

### Fetch and merge lastest changes

`git pull <remote> <branch-name>`, where `<remote>` can be empty if `origin` was configured or another remote repository and `<branch-name>` is the branch to fetch from.

### Get list of branches

`git branch`

### Create new local branch

`git branch <branch-name>`, where `<branch-name>` can be any non-existent name.

### Delete local branch

`git branch -d <branch-name>`

### Delete local branch by force

`git branch -D <branch-name>`

### Delete remote branch

`git push -d <remote> <branch-name>`, where `<remote>` is the remote repository.

### Switch branch

`git checkout <branch-name>`

### Switch and create new branch

`git checkout -b <branch-name>`

### Merge local branches

The below shows an example of how this is usually done.

```bash
// move from branch2 -> main
git checkout main
git merge branch2
```

### Push changes

`git push <remote> <branch-name>`, where `<remote>` is the repository name and `<branch-name>` is the branch name to be pushed.

### Setup push upstream

`git push -u <remote> <branch-name>`, where `<remote>` is the repository name and `<branch-name>` is the branch name to be pushed.

### Create version tag

`git tag <tag-name>`, where `<tag-name>` is usually a version such as `v1.0.0`.

### Push tag to remote repository

`git push --tags <remote>`

### Add remote repository

`git remote add <remote> <remote-url>`, where `<remote>` is the name given and `<remote-url>` is the url used to clone the repository.

### Remove remote repository

`git remote remove <remote>`

### Check remote repository list

`git remote -v` verbose mode. All URLs and names will be logged in the console.
`git remote` Only the remote repository names will be logged in the console.
