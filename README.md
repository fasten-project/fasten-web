<p align="center">
    <img src="https://user-images.githubusercontent.com/45048351/89221900-bdad6400-d5dc-11ea-8136-533875bbee8e.jpg">
</p>
<br/>
<p align="center">
    <a href="https://github.com/fasten-project/fasten-web/actions" alt="GitHub Workflow Status">
        <img src="https://img.shields.io/github/workflow/status/fasten-project/fasten-web/React%20CI?logo=GitHub%20Actions&logoColor=white&style=for-the-badge" /></a>
    <a href="https://demo.fasten-project.eu/" alt="FASTEN Project Web">
        <img alt="Website" src="https://img.shields.io/website?down_message=Offline&style=for-the-badge&up_message=Online&url=https%3A%2F%2Fdemo.fasten-project.eu"></a>
    <a href="https://github.com/fasten-project/fasten-web/" alt="Gitter">
            <img src="https://img.shields.io/gitter/room/fasten-project/fasten-web?style=for-the-badge&logo=gitter" /></a>
</p>
<br/>

[The FASTEN project](https://github.com/fasten-project/fasten) is an intelligent software package management systems that enhance robustness and security in software ecosystems. This frontend project helps to fully utilise these systems and visualises all the valuable data that is provided. This web platform can be used by the end developers in order to get fine grained data about the vurnalabilities that one uses in a visual and clear way.

Homepage: [demo.fasten-project.eu](https://demo.fasten-project.eu/)

## Getting Started

### Installation

##### SSH

```
// Clone this repository with SSH
$ git clone git@github.com:fasten-project/fasten-web.git
```

##### HTTPS

```
// Clone this repository with HTTPS
$ git clone https://github.com/fasten-project/fasten-web.git
```

### Requirements
- Running [fasten-project/fasten](https://github.com/fasten-project/fasten) instance with [Rest API](https://github.com/fasten-project/fasten/tree/develop/analyzer/restapi-plugin) plugin.
    - Base URL to Rest API can be adjusted at [src/config.ts]().

### Run

1) Run `yarn` to install all necessary dependencies
1) Run `yarn start` to run the application locally
1) The application will be automatically opened in the browser
    1) If it hasn't, access it at [`localhost:1234`](http://localhost:1234).

### Deployment

The application uses [Github Actions](https://github.com/fasten-project/fasten-web/actions) in order to automatically deploy the build to [Github Pages](https://pages.github.com). It happens on every merge to `main` branch. 
The build is available on `gh-pages` branch. 

## Built With
- [React](http://reactjs.org) - library for user interfaces
- [TypeScript](http://typescriptlang.org) - typed superset of JavaScript
- [Yarn](https://yarnpkg.com) - package management
  - [React Icons](https://react-icons.github.io/react-icons/) - icon library
  - [Emotion](https://emotion.sh/) - a library designed for writing css styles with JavaScript
  - [Jest](http://jestjs.io) & [Testing Library](https://testing-library.com) - code testing frameworks
  - See all dependencies in [package.json](/frontend/package.json)


## Maintainer
Roman Sirokov - <romatallinn@gmail.com> - @romatallinn


## Join the community

The FASTEN software package management efficiency relies on an open community contributing to open technologies. Related research projects, R&D engineers, early users and open source contributors are welcome to join the [FASTEN community](https://www.fasten-project.eu/view/Main/Community), to try the tools, to participate in physical and remote worshops and to share our efforts using the project [community page](https://www.fasten-project.eu/view/Main/Community) and the social media buttons below.  
<p>
    <a href="http://www.twitter.com/FastenProject" alt="Fasten Twitter">
        <img src="https://img.shields.io/badge/%20-Twitter-%231DA1F2?logo=Twitter&style=for-the-badge&logoColor=white" /></a>
    <a href="http://www.slideshare.net/FastenProject" alt="GitHub Workflow Status">
                <img src="https://img.shields.io/badge/%20-SlideShare-%230077B5?logo=slideshare&style=for-the-badge&logoColor=white" /></a>
    <a href="http://www.linkedin.com/groups?gid=12172959" alt="Gitter">
            <img src="https://img.shields.io/badge/%20-LinkedIn-%232867B2?logo=linkedin&style=for-the-badge&logoColor=white" /></a>
</p>
