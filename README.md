semver-check
============

Checks package.json dependencies and devDependencies stanzas for semantic version characters.

### Usage

```shell
# Install as dep
$ npm install semver-check --save-dev

# Add a dep to your package.json that has one of these chars: *=~<>^
$ npm install chalk --save

# Run as a cli program.
$ ./node_modules/.bin/semver-check package.json
// -> chalk not pinned to specific version
```

### Note
The first() higher order function, [and why I'm using it](http://blog.wayneseymour.com/higher-order-function-first/).

