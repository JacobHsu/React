---
id: doc2
title: Document
---

This is a link to [another document.](doc3.md)  
This is a link to an [external page.](http://www.example.com)

## Publish the Site

Edit the file docusaurus-tutorial/website/siteConfig.js

website\siteConfig.js

```js
const siteConfig = {
  title: 'Test Site', // Title for your website.
  tagline: 'A website for testing',
  url: 'https://jacobhsu.github.io', // Your website URL
  baseUrl: '/react-native-docs/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'react-native-docs',
  organizationName: 'jacobhsu',
```

website\deploy.sh

```js
GIT_USER=jacobhsu \
CURRENT_BRANCH=master \
USE_SSH=true \
yarn run publish-gh-pages
```

website\package.json

```js
"b": "yarn build",
"d": "./deploy.sh",
"build": "docusaurus-build",
```
