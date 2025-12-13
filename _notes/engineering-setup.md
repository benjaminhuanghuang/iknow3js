# Engineering setup

## Prettier

Add Prettier Extension in VS Code

Create .prettierrc

Format code from command

```sh
npm i -D prettier
```

Add command

```json
  "format": "prettier --write ."
```

## Husky

```sh
npm i -D husky lint-staged
npx husky init

```

lint-staged 是一个工具，用来在 Git 暂存区（staged）文件 上运行脚本。

Modify pre-commit

```sh
# 在提交 (git commit) 之前自动运行 ESLint、Prettier、Stylelint 等，只检查本次提交修改的文件，
npx lint-staged
```

Add .lintstagedrc
