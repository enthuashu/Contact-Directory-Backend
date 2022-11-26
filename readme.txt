Steps to create backend server
1. Open root directory in terminal
2. create index.js file
3. install inital packages which is required to create server(2 package file and 1 node modules folder is formed as a result)
4. Make two files
   a> .env file=> it stores sensitive information which is not supposed to be hosted live, but are used in code. 
        e.g. Mongodb creds, Configuration keys, admin id password, jwt key
        This .env file is not pushed while pushing to github or any other deployment platform
    b> .gitignore file. This file stores name of those files which are not pushed
