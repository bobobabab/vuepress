(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-规范"}},[t._v("#")]),t._v(" Git 规范")]),t._v(" "),a("h2",{attrs:{id:"分支命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支命名规则"}},[t._v("#")]),t._v(" 分支命名规则")]),t._v(" "),a("ol",[a("li",[t._v("主分支: master")]),t._v(" "),a("li",[t._v("开发分支: develop")]),t._v(" "),a("li",[t._v("功能分支: feature-分支名称")]),t._v(" "),a("li",[t._v("hotfix修复分支: hotfix-分支名称")])]),t._v(" "),a("h2",{attrs:{id:"提交规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交规则"}},[t._v("#")]),t._v(" 提交规则")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/commit.png"),alt:"commit"}}),t._v(" "),a("h2",{attrs:{id:"操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),a("ol",[a("li",[t._v("负责人创建git仓库，创建develop分支")]),t._v(" "),a("li",[t._v("开发者clone项目， 切换到master分支，pull最新代码，创建本地功能分支，然后推送")]),t._v(" "),a("li",[t._v("功能开发后，在当前分之自测，然后把feature合并到develop，发起测试，有bug则在feature上修改继续合并到develop")]),t._v(" "),a("li",[t._v("测试通过后，切到master然后pull最新代码，再切会feature，把master分支合并到feature分支（避免存在的冲突），然后提交合并请求，写上功能，需求，脚本等，指定管理审核代码然后合并")]),t._v(" "),a("li",[t._v("负责人审核代码后，处理合并请求，打上tag，发版本，走线上流程")])]),t._v(" "),a("p",[a("b",[t._v("注意：功能已经上线后发现 bug，则更新 master 分支并切出一个 hotfix 分支进行修复。修复完成后同 feature 分支发布流程。")])]),t._v(" "),a("h2",{attrs:{id:"统一的提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一的提交规范"}},[t._v("#")]),t._v(" 统一的提交规范")]),t._v(" "),a("p",[t._v("通过Git提交代码时，组织好的提交信息，可以提高项目的整体质量，至少能有以下优点：")]),t._v(" "),a("ul",[a("li",[t._v("格式统一的提交信息有助于自动化生成CHANGELOG")]),t._v(" "),a("li",[t._v("版本库不止是存放代码的仓库，它记录的是项目的开发日志，应该要清楚的表述出提交是做了什么，可以帮助后来者快速学习和回顾代码，也方便其他人协助以及review代码")]),t._v(" "),a("li",[t._v("规范提交信息可以促进提交着提交有意义的、粒度合适的"),a("code",[t._v("提交")]),t._v("，这样要事先想好如何描述，可以促进提交者把控提交的粒度")])]),t._v(" "),a("h3",{attrs:{id:"如何配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[t._v("#")]),t._v(" 如何配置")]),t._v(" "),a("p",[t._v("以下工具可以帮助检测提交信息")]),t._v(" "),a("ul",[a("li",[t._v("conventional-changelog - 从项目的提交信息中生成CHANGELOG和发布信息")]),t._v(" "),a("li",[t._v("commitlint - 检验提交信息")]),t._v(" "),a("li",[t._v("commitizen - 简单的提交规范和提交帮助工具，推荐")])]),t._v(" "),a("p",[t._v("也可以在提交的时候做代码的格式话以及验证处理")]),t._v(" "),a("ol",[a("li",[t._v("commitizen 和 cz-lerna-changelog 通过 commitizen 格式化 git commit message，通过询问方式来完成提交信息")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ cnpm i -D commitizen\n$ cnpm i -D cz-lerna-changelog\n")])])]),a("p",[t._v("package.json 基本配置如下")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"private"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"c"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git-cz"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitizen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./node_modules/cz-lerna-changelog"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitizen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cz-lerna-changelog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.0.2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lerna"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.15.0"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("commitlint 和 husky 对手动的 git commit -m message 进行信息的校验，不符合就不让提交，并且提示问题所在。检验的工作是由 commitlint 完成，通过 husky 来指定校验的时机")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 commitlint 和遵守的规范")]),t._v("\n$ cnpm i -D @commitlint/cli @commitlint/config-conventional\n")])])]),a("p",[t._v("在工程根目录添加 commitlint.config.js 为 commitlint 指定相应的规范")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ cnpm i -D husky\n")])])]),a("p",[t._v("在 package.json 中增加配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v('"husky'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("standardjs 和 lint-staged 通过 linter 进行代码修正，并且检查暂存区中的文件，对暂存区中的js文件执行 standard --fix 校验并且自动修复，用 husky 的钩子（pre-commit）来执行 lint-staged 的校验操作")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ cnpm i -D standard lint-staged\n")])])]),a("p",[t._v("package.json")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n  "husky'),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standard --fix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"测试案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试案例"}},[t._v("#")]),t._v(" 测试案例")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/commitlint.svg"),alt:"commitlint"}}),t._v(" "),a("h2",{attrs:{id:"附录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/git.png"),alt:"git"}})])}),[],!1,null,null,null);s.default=r.exports}}]);