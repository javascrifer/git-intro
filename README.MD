# Git playground

## You will learn

1. How to resolve the conflicts
2. Difference between merging and rebasing
3. Creating and merging pull request

## Agenda

### Preparation
Create 3 branches:
1. `conflict-maker`
1. `conflict-resolve-merge`
1. `conflict-resolve-rebase`

You will use these 3 branches to create pull requests and resolve the conflicts.

**Important:** create branches before going to `Learn how to` part.

### Learn how to create a Pull Request

Main goal is to go through happy flow of creating and merging pull request. Follow these steps:

1. In `conflict-maker` branch modify `index.js` file to look like following:

```js
function iWillHaveConflicts(a, b) {
  const _a = a + 1;
  const _b = b + 2;
  return _a + _b;
}

console.log(iWillHaveConflicts(10, 12));
```
2. Commit and push changes to `conflict-maker` branch.
3. Create a pull request using GitHub.
4. Merge pull request using `Squash and Merge` strategy.

### Learn how to resolve the conflict using merge

Main goal is to go through flow there you will have a conflict and your personal preference of conflict resolvent is merge. Follow these steps:
1. Checkout to existing `conflict-resolve-merge` branch.
2. Modify `index.js` file to look like following:

```js
function iWillDefinitelyHaveConflicts(a, b) {
  const iWillCreateConflicts = () => {
    const _a = a + 1;
    const _b = b + 2;
    return _a + _b;
  }
  
  return iWillCreateConflicts();
}

console.log(iWillDefinitelyHaveConflicts(10, 12));
```
3. Commit changes and push them to `conflict-resolve-merge`.
4. Create a pull request.
5. See that you have a conflicts with master.
6. Resolve them using merge.
7. Push changes to `conflict-resolve-merge`.

**Important**: do not merge pull request.

### Learn how to resolve the conflict using rebase

Main goal is to go through flow there you will have a conflict and your personal preference of conflict resolvent is rebase. Follow these steps:
1. Checkout to existing `conflict-resolve-rebase` branch.
2. Modify `index.js` file to look like following:

```js
function iWillDefinitelyHaveConflicts(a, b) {
  const iWillCreateConflicts = () => {
    const _a = a + 1;
    const _b = b + 2;
    return _a + _b;
  }
  
  return iWillCreateConflicts();
}

console.log(iWillDefinitelyHaveConflicts(10, 12));
```
3. Commit changes and push them to `conflict-resolve-rebase`.
4. Create a pull request.
5. See that you have a conflicts with master.
6. Resolve them using rebase.
7. Push changes to `conflict-resolve-rebase`.

**Important**: do not merge pull request.
