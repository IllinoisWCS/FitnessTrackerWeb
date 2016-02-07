# FitnessTrackerWeb
This the web portion of the Tech Team project for 2015-2016.

### Before you begin:
Make sure you have NodeJS installed on your machine. You will also need to have NPM installed.

### How to set up this project:
Fork this project to your own Github account.
Then follow the steps below, replacing username with your own username.
```
git clone https://github.com/username/FitnessTrackerWeb.git
cd FitnessTrackerWeb
git remote add upstream https://github.com/IllinoisWCS/FitnessTrackerWeb.git
npm install
```
All dependencies will be installed. We will be using Express, which is based on NodeJS.

### Creating your features
You'll mostly be working with the `templates` directory, `js` and `css`, all within the `client` directory. Each of you will be working on a certain view, so you'll need to create a new template, as well as new scripts and CSS files.

We suggest the following workflow:
- Create a new html file within the templates directory.
- Copy index.html into this new html file.
- If you have styling specific to your layout, create a new CSS file in the css folder.
- Add a link to this CSS to your template only.
- If you have scripting specific to your layout, create a new JS file in the js folder.
- Add a link to this JS to your template only.
- Add a new route to the routes.js file. Copy the first example and append to the file. Make sure to append your example before the line that says `module exports = router;`.

### Seeing your work
```
cd FitnessTrackerWeb
node server.js
```
Go to the web browser of your choice and type in the URL bar: `http://localhost:3000`.

### Where's Our Data?
Our data is stored in Firebase, which you can read more about at <http://firebase.com>.

### Front-End dependencies
We are just going to be using Bootstrap to make things pretty, JQuery to make our lives easier with Javascript, the Firebase Javascript API.

### Ready to contribute?
Make sure to do the following before you make a pull request. This will make merging pull requests so much easier.
```
cd FitnessTrackerWeb
git add .
git commit -m "any changes you've made locally"
git push
git fetch upstream
git checkout master
git merge upstream/master
```
Then make your pull request.