#### Notes for starting a Node.js project
1. First open a folder and type the following command in the terminal
```bash 
    npm init
```
this will create your package.json file. You have to include this file when you are deploying your application to the server. You can run the following command to install the packages that are in the package.json file.
```bash
    npm install
```
2. If you want to create a random id or uuid you can run
```bash
    npm install uuid
```
3. You will have to install some more dependencies which of one is nodemon, you can type the following command to install
```bash
    npm install --save-dev nodemon
```
or
```bash
    npm install -D nodemon
```
4. We don't have to include the folder of node_modules while deploying we can just type the command and the server will install all the dependencies listed in the package.json file.The command is
```bash
    npm install
```
5. If we have nodemon installed in our dependencies we don't have to manually restart the server on new changes. Type the following command to install the nodemon
```bash 
    npm install -D nodemon
```
Than we have to include some scripts in the package.json file, these are
```bash
    "scripts": {
        "start": "node index",
        "dev": "nodemon index"
  }
```
Than finally, we have to run the following command to run the server
```bash
    npm run dev
```