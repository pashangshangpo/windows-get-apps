# windows-get-apps

> Windows Get Apps

## Use

1、npm i --save https://github.com/pashangshangpo/windows-get-apps.git

2、const getApps = require('windows-get-apps')

## Demo

```js
const getApps = require('windows-get-apps')

getApps().then(console.log)
```

## Output

```js
[
    {
    name: 'Tools for Desktop Apps',
    icon: 'C:/Users/Administrator/code/windows-get-apps/apps/Tools for Desktop Apps.png'
  },
  {
    name: 'Tools for Windows Store Apps',
    icon: 'C:/Users/Administrator/code/windows-get-apps/apps/Tools for Windows Store Apps.png'
  },
  {
    name: 'Windows Software Development Kit',
    icon: 'C:/Users/Administrator/code/windows-get-apps/apps/Windows Software Development Kit.png'
  }
]
```
