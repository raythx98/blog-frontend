---
title: 'Building Webpages'
date: '2022-05-24'
spoiler: "Simplifying webpage development using gh-pages."
cta: 'blog'
---

Around this time last year, I had a taste of what web development is like -- using the legacy HTML/CSS/Javascript, feel free to check out my [legacy website](https://legacy.raythx.com).

Fast forward to this year, I learned more about modern frontend frameworks, more notably `React`, which is powerful in creating reusable containers. I further honed my web development skills by making a [new website](https://raythx.com) and [Unscrambled](https://blog.raythx.com), this very blog site.

---
#### Technical Stack
- React
- Bootstrap
- Node.js
- gh-pages

#### gh-pages
Everyone probably knows about the vanilla github pages, which allows you to host static files from github repositories. I recently learned about [gh-pages](https://www.npmjs.com/package/gh-pages), which automatically deploys a React app on github pages.

#### Custom Domain
I purchased the domain `raythx.com` from [OnlyDomains](www.onlydomains.com) and will intend to maintain it for the foreseeable future. For a price of ~$10USD annually, I can create as many subdomains as I want, `blog.raythx.com`, `legacy.raythx.com`, `xxx.raythx.com`, etc...

#### Brownfield Development
In the interest of time, I have decided to use existing repositories and upgrade/adopt them accordingly to suit my needs. I will probably talk more about Brownfield vs Greenfield development in the future...

Disclaimer: 
>It is not as easy as "Copy and Pasting"

|Web App|Source|
|-|-|
|Legacy Website|https://github.com/smaranjitghose/awesome-portfolio-websites|
|Portfolio Website|https://github.com/hashirshoaeb/home|
|Blog Site|https://github.com/gaearon/overreacted.io|
---

## Create Node Virtual Environment
I used to scoff at the idea of maintaining virtual environments for each project. 

I thought 
>"I'll just install to global all the time"

After my internship stint at Reluvate Technologies, I learned the importance of managing dependencies. Once I gone through the trouble of resolving conflicting dependencies, I learnt that virtual environments are very, *very* important.

Install `nodeenv`
```
sudo pip install nodeenv
```

Observe the available versions for node
```
nodeenv --list
```

It might require some research/experimentation to find out the node version that works best, assuming we found it to be `14.17.3`
```
nodeenv env --node 14.17.3
```

To activate the node environment
```
. env/bin/activate
```

To exit the node environment
```
deactivate_node
```
---
## Using npm
To install required dependencies in `package.json`
```
npm i
```

To start the application 
```
npm start
```

Once the application is ready to deploy, we need to install `gh-pages`
```
npm install gh-pages --save-dev
```

Add a `homepage` property to `package.json` in this format: <br>
`https://{username}.github.io/{repo-name}`
```jsxon{4}
{
  "name": "my-app",
  "version": "0.1.0",
  "homepage": "https://{gitname}.github.io/{react-gh-pages}",
  "private": true,
```

In `package.json`, add `predeploy` and `deploy` properties to the scripts object
```jsxon{2-3}
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
```

Finally, run the following command to deploy the app, `gh-pages` will prompt you for your github username and authentication token, which you can retrieve from `Github settings` > `Developer settings` > `Personal access tokens`.
```
npm run deploy
```

The documentation which I referred can be found [here](https://github.com/gitname/react-gh-pages).

---
## Using yarn
To setup your developer environment
```
yarn
yarn dev
```
The project will be live at `http://localhost:8000/`.

Once the application is ready to deploy, we need to install `gh-pages`
```
yarn add --dev gh-pages
```

Add a `homepage` property to `package.json` in this format: <br>
`https://{username}.github.io/{repo-name}`
```jsxon{4}
{
  "name": "my-app",
  "version": "0.1.0",
  "homepage": "https://{gitname}.github.io/{react-gh-pages}",
  "private": true,
```

In `package.json`, edit `build` and `deploy` properties to the scripts object
```jsxon{3,5}
  "scripts": {
    "dev": "gatsby develop",
    "build": "rm -rf public && rm -rf .cache && gatsby build",
    "now-build": "gatsby build",
    "deploy": "gatsby build --prefix-paths && gh-pages -d public",
```
Why does it look different? Yarn builds into the `public` directory, which is why we need to specify to `gh-pages` to obtain the build folders from `public`.

Sometimes `gh-pages` might complain that such a page already exists when redeploying, even though you have made sure that you have taken everything down. For me, removing the cache in `node_modules` did the trick.
```
rm -rf node_modules/.cache/gh-pages
```

Finally, run the following command to deploy the app, `gh-pages` will prompt you for your github username and authentication token, which you can retrieve from `Github settings` > `Developer settings` > `Personal access tokens`.
```
yarn deploy
```

The documentation which I referred can be found [here](https://gist.github.com/vre2h/da9db3733c238c174d13670fb77c1f1a).

---

## Using Custom Domain
I use [OnlyDomains](www.onlydomains.com), the difference between service providers should not vary too much.

#### Apex and subdomains
Apex domain refers to `raythx.com`, subdomains refer to `blog.raythx.com`, `legacy.raythx.com` and even `www.raythx.com`. Although it is common practice to redirect `www.raythx.com` to `raythx.com`.

To configure custom domains with gh-pages, you will first need to redirect all `raythx.com` to github pages. This is done by creating `A` records in the OnlyDomains Zone Records. This can be found in `OnlyDomains` > `Domains` > `My Domains` > `www.raythx.com` > `DNS Settings` > `Edit Zone Records`.

|Host|Type|Content|
|-|-|-|
|@|A|185.199.108.153|
|@|A|185.199.109.153|
|@|A|185.199.110.153|
|@|A|185.199.111.153|

Now that we have configured the apex domain, we need to associate our subdomains with github, so that github knows that these subdomains are available for use. This is done by creating an alias, otherwise known as canonical name `CNAME` records.

|Host|Type|Content|
|-|-|-|
|blog|CNAME|raythx98.github.io.|
|legacy|CNAME|raythx98.github.io.|
|www|CNAME|raythx98.github.io.|

To bring our projects to live, we simply indicate the custom name in github pages. This can be found in `Repository` > `Settings` > `Pages` > `Custom domain`.

Voila! The following websites are now live. Do take note that [DNS propogation](https://ns1.com/resources/dns-propagation) may take up to 24 hours, so it might take some time for people to know that `raythx.com` exists.
- [raythx.com](https://raythx.com)
- [blog.raythx.com](https://blog.raythx.com)
- [legacy.raythx.com](https://legacy.raythx.com)

Not only that, github pages automatically registers your website with a [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) for **free**, so you get the [secure padlock](https://medium.com/xebia-engineering/understanding-padlocks-on-browsers-ba411e5b826) when people visit your site.

What do you think of `gh-pages`? I'd love to hear from you on Linkedin! Thanks for reading.