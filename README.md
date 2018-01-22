# Getting Started

1. Verify you have installed *node*, *npm* and *gulp*.
2. Start npm in your project root by writting `npm init -y` on console.
3. Install all dependences:
```
npm install --save-dev gulp gulp-sass gulp-wait gulp-autoprefixer gulp-pug browser-sync
```
>NOTE: `gulp-wait` is used to solve a bug while compiling partial SASS files with Visual Studio Code.
>if you use Sublime Text, go to *Preferences > Settings* and add this line: `"atomic_save": true`
