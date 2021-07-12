---
title: Git 规范
sidebar: auto
---

# Git 规范

## 分支命名规则

1. 主分支: master
2. 开发分支: develop
3. 功能分支: feature-分支名称
4. hotfix修复分支: hotfix-分支名称

## 提交规则

<img :src="$withBase('/commit.png')" alt="commit">

## 操作步骤

1. 负责人创建git仓库，创建develop分支
2. 开发者clone项目， 切换到master分支，pull最新代码，创建本地功能分支，然后推送
3. 功能开发后，在当前分之自测，然后把feature合并到develop，发起测试，有bug则在feature上修改继续合并到develop
4. 测试通过后，切到master然后pull最新代码，再切会feature，把master分支合并到feature分支（避免存在的冲突），然后提交合并请求，写上功能，需求，脚本等，指定管理审核代码然后合并
5. 负责人审核代码后，处理合并请求，打上tag，发版本，走线上流程

<b>注意：功能已经上线后发现 bug，则更新 master 分支并切出一个 hotfix 分支进行修复。修复完成后同 feature 分支发布流程。</b>

## 统一的提交规范

通过Git提交代码时，组织好的提交信息，可以提高项目的整体质量，至少能有以下优点：
* 格式统一的提交信息有助于自动化生成CHANGELOG
* 版本库不止是存放代码的仓库，它记录的是项目的开发日志，应该要清楚的表述出提交是做了什么，可以帮助后来者快速学习和回顾代码，也方便其他人协助以及review代码
* 规范提交信息可以促进提交着提交有意义的、粒度合适的`提交`，这样要事先想好如何描述，可以促进提交者把控提交的粒度

### 如何配置

以下工具可以帮助检测提交信息

* conventional-changelog - 从项目的提交信息中生成CHANGELOG和发布信息
* commitlint - 检验提交信息
* commitizen - 简单的提交规范和提交帮助工具，推荐

也可以在提交的时候做代码的格式话以及验证处理

1. commitizen 和 cz-lerna-changelog 通过 commitizen 格式化 git commit message，通过询问方式来完成提交信息

```bash
$ cnpm i -D commitizen
$ cnpm i -D cz-lerna-changelog
```

package.json 基本配置如下

```json
{
  "name": "root",
  "private": true,
  "scripts": {
    "c": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "devDependencies": {
    "commitizen": "^3.1.1",
    "cz-lerna-changelog": "^2.0.2",
    "lerna": "^3.15.0"
  }
}
```

2. commitlint 和 husky 对手动的 git commit -m message 进行信息的校验，不符合就不让提交，并且提示问题所在。检验的工作是由 commitlint 完成，通过 husky 来指定校验的时机


```bash
# 安装 commitlint 和遵守的规范
$ cnpm i -D @commitlint/cli @commitlint/config-conventional
```

在工程根目录添加 commitlint.config.js 为 commitlint 指定相应的规范

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

```bash
$ cnpm i -D husky
```

在 package.json 中增加配置
```js
"husky: {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

3. standardjs 和 lint-staged 通过 linter 进行代码修正，并且检查暂存区中的文件，对暂存区中的js文件执行 standard --fix 校验并且自动修复，用 husky 的钩子（pre-commit）来执行 lint-staged 的校验操作

```bash
$ cnpm i -D standard lint-staged
```

package.json
```js
{
  "husky: {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.js": [
      "standard --fix",
      "git add"
    ]
  }
}
```


## 测试案例

<img :src="$withBase('/commitlint.svg')" alt="commitlint">

## 附录

<img :src="$withBase('/git.png')" alt="git">
