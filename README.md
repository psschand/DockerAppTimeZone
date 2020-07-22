This is an app which involves 4 technology stack:
1. React.js
2. Node.js, Adonis.js
3. Mysql
4. Docker

In this repository there are 2 folders
 **1.** DockerBoiler
 **2.** ReactApp.

In the first app the production ready environment is build in which there are 3 directories
 **1.** server
 **2.** client
 **3.** db(for database)

 **1.** in server directory Adonis framework is used, which has ample amount of libarary,
 which can be utilise by the developer once in a life.
 **2**. client: in this directory production ready build of React App has been used. whenever a
 developer feels the desired React app is ready to deploy then the user will build the React App using the command
 
 `npm run build`
 
 this will create a directory with the name of build, then the developer needs to update the 
 `DockerBoiler/client/build` 
 directory with the files of `ReactApp/build` 
 
  **3**. db: this directory contains the file of sql, which will be executed, once the Docker is build with the image of mysql.

**2.** ReactApp directory contains the actual code of webapp, this app has a lots of boilerplate, which are essential for a 
 scalable application to make development perfect for the further updates.

to deploy this application i have already mentioned the ways in the above lines.
