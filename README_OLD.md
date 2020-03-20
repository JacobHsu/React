# React

[React](https://reactjs.org/) A JavaScript library for building user interfaces    
[Add React in One Minute](https://reactjs.org/docs/add-react-to-a-website.html)  


[Create React App](https://reactjs.org/docs/create-a-new-react-app.html)  
```
npx create-react-app my-app
cd my-app
npm start
```

## Docs

[Docusaurus](https://docusaurus.io/zh-CN/) · Easy to Maintain Open Source Documentation
`$ npx docusaurus-init`

`$ cd website`  
`$ yarn start`  
http://localhost:3000/

```html
react
├── docker-compose.yml
├── Dockerfile
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   ├── exampledoc4.md
│   └── exampledoc5.md
├── download
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   └── serviceWorker.js
│   └── yarn.lock
├── my-app
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── mock
│   │       └── data.json
│   ├── README.md
│   └── src
│       ├── App.js
│       ├── index.js
│       ├── logo.svg
│       ├── style.css
│       ├── TodoItem.js
│       └── TodoList.js
├── my-ext
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   └── serviceWorker.js
│   └── yarn.lock
├── README_OLD.md
├── todo
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── mock
│   │       └── todos.json
│   ├── README.md
│   └── src
│       ├── actions
│       │   ├── actionTypes.js
│       │   └── index.js
│       ├── components
│       │   ├── AddTodo.js
│       │   ├── AddTodo.old.js
│       │   ├── App.js
│       │   ├── App.old.js
│       │   ├── Footer.js
│       │   ├── Footer.old.js
│       │   ├── Todo.js
│       │   └── TodoList.js
│       ├── containers
│       │   ├── AddTodoContainer.js
│       │   ├── FooterContainer.js
│       │   └── TodoListContainer.js
│       ├── enhancers
│       │   └── logger.js
│       ├── HOCs
│       │   └── toJS.js
│       ├── index.js
│       ├── logo.svg
│       ├── middlewares
│       │   └── logger.js
│       ├── reducers
│       │   ├── filter.js
│       │   ├── index.js
│       │   ├── index_old.js
│       │   ├── text.js
│       │   └── todo.js
│       ├── selectors
│       │   └── index.js
│       └── store.js
└── website
    ├── blog
    │   ├── 2016-03-11-blog-post.md
    │   ├── 2017-04-10-blog-post-two.md
    │   ├── 2017-09-25-testing-rss.md
    │   ├── 2017-09-26-adding-rss.md
    │   └── 2017-10-24-new-version-1.0.0.md
    ├── core
    │   └── Footer.js
    ├── package.json
    ├── pages
    │   └── en
    │       ├── help.js
    │       ├── index.js
    │       └── users.js
    ├── README.md
    ├── sidebars.json
    ├── siteConfig.js
    ├── static
    │   ├── css
    │   │   └── custom.css
    │   └── img
    │       ├── favicon.ico
    │       ├── oss_logo.png
    │       ├── undraw_code_review.svg
    │       ├── undraw_monitor.svg
    │       ├── undraw_note_list.svg
    │       ├── undraw_online.svg
    │       ├── undraw_open_source.svg
    │       ├── undraw_operating_system.svg
    │       ├── undraw_react.svg
    │       ├── undraw_tweetstorm.svg
    │       └── undraw_youtube_tutorial.svg
    └── yarn.lock
```


# Tools

[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)  

## mock 


## note

JSX 是 `createElement` 的語法糖
[babeljs](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwCwjABAxgNghgZwQXgEQDs4FsCmqB8IOMMA9hAE45xQAuwA9OPkA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.7&externalPlugins=)

### public
public\mock\data.json   
http://localhost:3000/mock/data.json  

### [serve](https://www.npmjs.com/package/serve) 
`npm i -g serve`

test\api\data.json 
$ react\test> serve  
http://localhost:5000/api/data.json  

