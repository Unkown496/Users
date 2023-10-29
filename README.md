# Немного пояснения
НЕ ЗАБУДЬТЕ СКОПИРОВАТЬ .env.example в .env (Вставив свою строку для точки апи)

Зачем локальная фильтрация если идет запрос на конкретного пользователя?

Все, просто. Запрос выполянется по emit события input'a. Вещать событие на onInput не валидно запрос будет сыпаться каждый ввод каждого символа, поэтому Запрос на КОНКРЕТНОГО ПОЛЬЗОВАТЕЛЯ идет каждый onChange и предварительно чтобы из уже полученных пользователей формировался хоть какой-то ответ пользователю, делается фильтрация имеющихся локальных данных (по хорошему, фильтрацию "по запросу", убрать полностью и дать фронтенду фильтровать пользователей, но тз обязывает) P.S беру в отрыве от реального кейса, понимаю что возможно такая фильтрация нужна будет на страницах где есть пагинация, и для этого нужно выдавать запрос. Но в отрыве конкретно в этом задании, лучше было бы все перенести на computed (локальный фильтр)

```typescript
const filterUserByName = computed<User[]>(() => users.value.filter(user => user.name.toLowerCase().match(inputUserName.value.toLowerCase())));
```

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) +[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) +[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run`Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find`TypeScript and JavaScript Language Features`, right click and select`Disable (Workspace)`
2. Reload the VSCode window by running`Developer: Reload Window` from the command palette.
