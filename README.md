# boilerplate_es_no_packing

This is a template repository, designed for the JavaScript language without packing.

## project package

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

## npm packages

工程根目录下，创建各个包结构

```cmd
npm init -w apps/client
npm init -w apps/server
npm init -w packages/pkg1
npm init -w packages/pkg2
```

各个包 package.json 的配置：

```json
// pkg1为例
"type":"module",
"dependencies": {
  "pkg2": "file:packages/pkg2" // 依赖
},
```

## 测试

```cmd
npm run client
```
