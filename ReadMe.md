Controller
  1. Project architechture created.
######
cd API
dotnet run

dotnet watch

### migration folder create using
dotnet ef migrations add InitialCreate -p Persistence -s API

dotnet build

dotnet ef database update -p Persistence  -s API

dotnet ef database drop -p Persistence -s API

- api
- application
- persistence
- domain

  dotnet new list
  dotnet new gitignore

  1.dotnet CLI
  2.dotnet project files
  3. running the application
  4. Entity framework
  5. seeding data
  6. code first migration
  7. test api using postman (activities and activity by id)

2. React
    
    1. vite
       - npm create vite@latest
  2. cd client
  3. npm install
  4. npm run dev
  

 in  vite.config.js update the port details
  server:{
   port:3000
  }

material ui: 
npm install @mui/material @emotion/react @emotion/styled

terminal1: /Reactivities/API>> dotnet run
terminal2: /Reactivities/client>> npm run dev
npm install @fontsource/roboto

**mkcert** is a simple tool for making locally- trusted development certificates. it requires no configuration

1. npm install -D vite-plugin-mkcert
     
2. then, vite.config.ts  - import mkcert from 'vite-plugin-mkcert';
3.  and in the plugin  add mkcer() ie,   plugins: [react(),mkcert()],

4. then npm run dev
5. dotnet dev-certs https --trust (in dotnet api)
6. 


React front end (conti...)
src-> mkdir app
src-> mkdir features


material ui
https://mui.com/material-ui/react-app-bar/