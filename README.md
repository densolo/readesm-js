# readesm-js
JavaScript implementation of the reader of ESM tachograph files from https://sourceforge.net/p/readesm/code/HEAD/tree/
 
## Build

Working JavaScript FILE is commmited in htmlpage/js/main.EsmDownloader.bundle.js


To build a new version from TypeScript source code

```
python generator/generate.py

npm install
npm run build:web
npm run test
```

## Command line

The command below will read <file> and produces <file>.html and <file>.json
 ```
 npm run convert -- data/Input.ddd
 ```

## Browser link

 The example below downloads DDD file, convert into JSON on the fly and saves into user downloads. See full example in htmlpage/download.html 

 ```
<script src="js/main.EsmDownloader.bundle.js"></script>

<a href="javascript:EsmDownloader.downloadEsmAsJson('files/Input.ddd');">Input.ddd JSON</a>
 ```