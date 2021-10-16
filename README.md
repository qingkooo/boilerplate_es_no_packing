# boilerplate_es_no_packing

This is a template repository, designed for the JavaScript language without packing.

The project construction as follows...

## package setting

### project package

工程 package.json 配置

```json
"type":"module",
// 工作区设置
"workspaces": [
  "packages/*",
  "apps/*"
],
// 发布源设置
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
},
// 命令
"scripts": {
  "clear:node_modules": "find . -name 'node_modules' -type d | xargs rm -rf",
  "client": "npm start --workspace=client"
}
```

### npm packages

工程根目录下，创建各个包结构

```cmd
npm init -w apps/client
npm init -w apps/server
npm init -w packages/pkg1
npm init -w packages/pkg2
```

以 pkg1 包的 package.json 配置为例：

```json
"type":"module",
"dependencies": {
  "pkg2": "file:packages/pkg2"
},
```

以 client 包的 package.json 配置为例：

```json
"private":true,
"type":"module",
"dependencies": {
  "pkg1": "file:packages/pkg1"
},
```

### 测试 1

```cmd
npm run client
```

## code style and quanlity

### linter(alidate quanlity code)

```cmd
npm i -D eslint stylelint
npm i -D stylelint-config-standard
npx eslint --init
```

修改.eslintrc.json

```json
// 按需开启
{
  "root": true,
  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  "env": {
    "browser": true,
    "node": true,
    "worker": true,
    "serviceworker": true
  },
  "extends": ["eslint:recommended"]
}
```

创建.stylelintrc.json

```json
{
  "extends": ["stylelint-config-standard"]
}
```

### formatter(code style format)

通过屏蔽 linters 可能与 formatter 相冲突的 rules，解决 formatter 和 linters 共存的问题

```cmd
npm i -D prettier
npm i -D eslint-config-prettier stylelint-config-prettier
```

修改 .eslintrc.json

```json
"extends": ["eslint:recommended", "prettier"]
```

修改 .stylelintrc.json

```json
"extends": ["stylelint-config-standard", "stylelint-config-prettier"]
```

### 添加以上 formatter 和 linters 对应的 ignore 文件

.eslintignore
.stylelintignore
.prettierignore

### 测试 2

```json
"check:prettier": "prettier . --check",
"check:eslint": "eslint **/*.{js,ejs,cjs}",
"check:stylelint": "stylelint **/*.{css,less,scss}",
"check:conflict-with-prettier-rules:stylelint-config": "stylelint-config-prettier-check",
"check:conflict-with-prettier-rules:eslint-config": "eslint-config-prettier **/*.js",
"fix:prettier": "prettier {apps,packages}/**/*.{js,ejs,cjs,css,less,scss,md,json} --write",
"fix:eslint": "eslint {apps,packages}/**/*.js --fix",
"fix:stylelint": "stylelint {apps,packages}/**/*.{css,less,scss} --fix",
```

## CI steps

### make githooks simplify: husky

安装

```cmd
npm install husky --save-dev
npm set-script prepare "husky install"
npm run prepare
```

使用

```cmd
npx husky add .husky/pre-commit "npm run scriptName" // 执行npmscript
// or
npx husky add .husky/pre-commit "npx npmPkgName" // 执行本地包优先
// or
npx husky add .husky/pre-commit "<shellscript/javascript>" // 取决于Shebang
```

### do linters validate:pre-commit

```cmd
npm i -D lint-staged
npx husky add .husky/pre-commit "npx lint-staged"
```

package.json 添加

```cmd
"lint-staged": {
    "*.js": "eslint --cache --fix",
    "*.css": "stylelint --fix",
    "*.{js,css,md}": "prettier --write"
  },
```

### do formatting:pre-commit

同上

### do commit message validate:commit-message

specification: [google specification](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y)

## 测试 3

略

## generate changelog

## 测试 5

略
