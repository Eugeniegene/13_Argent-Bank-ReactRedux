# ArgentBank - EugenieGene

Projet 13 -  Utilisez une API pour un compte utilisateur bancaire avec React

## Technologies used

- React v.18
- React Router
- CSS 3 
- React Redux

## Ressources provided : 

### Wireframes
![image](https://user-images.githubusercontent.com/97299297/204765264-b585e7f6-a203-497b-a688-086d7558d2d3.png)
![image](https://user-images.githubusercontent.com/97299297/204765528-5dcccb2e-fc98-44f4-a046-a29955fb8da5.png)

### Static code 

The static code is available here : https://github.com/Eugeniegene/P13-Bank-API-07112022/tree/master/designs

## How to install ? 

### Prequisites 

- npm 8.19.2
- NoneJs 18.11.0
- Code editor
- MongoDB

### Installing and lauching Back-End files 

Clone the repository of SportSee Back-End:
```bash
git clone https://github.com/Eugeniegene/P13-Bank-API-07112022
``` 
When opening the back-end repository :
```bash
npm install
```
Launch back-end on port 3001 :
```bash
npm run server
```

### Populated Database Data
#### Tony Stark
- First Name: Tony
- Last Name: Stark
- Email: tony@stark.com
- Password: password123

#### Steve Rogers
- First Name: Steve,
- Last Name: Rogers,
- Email: steve@rogers.com,
- Password: password456

## Available Endpoints

This project contains three general endpoints. Their use is limited to the user's status (connected or not)

- http://localhost:3001/api/v1/user/ => baseURL for the project
- http://localhost:3001/api/v1/user/login => url to get to the login page
- http://localhost:3001/api/v1/user/profile => url to get to the profile page 

### IMPORTANT NOTICE !

As requested, the profile page will not be accessible if the user is not connected. 

## Installing and launching Front-end

Clone the repository of SportSee Front-End:
```bash
git clone https://github.com/Eugeniegene/P13-Argent-Bank-Front---React-Redux
```
Then, inside the repository, install dependencies:
```bash
npm install
```
Launch Front-End on port 3000:
```bash
npm start
```
Front-End is now rendered at URL http://localhost:3000
