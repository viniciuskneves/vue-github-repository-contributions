# [vue-github-repository-contributions](http://vue-github-repository-contributions.surge.sh/)

![build-travis](https://travis-ci.com/osmarpetry/vue-github-repository-contributions.svg?branch=master)

Searches for a GitHub username, list its repositories and then check its contributors and contributions.

Made with Vue (Vue CLI 3), Bootstrap and Highcharts!

## Setup
```
npm install
```

### Development
Runs local server for development purpose.
```
npm run serve
```

### Production
Builds for production.
```
npm run build
```

## Deploy
The project is automatically deployed to Surge. The following command will automatically build the project before deploying.
```
npm run deploy
```

## Tests and linting

### Lint (with autofix)
```
npm run lint
```

### Tests (Unit)
```
npm run test:unit
```

If you want to do TDD (all the project was developed that way) I do recommend to enable watching while running tests.
```
npm run test:unit:watch
```
