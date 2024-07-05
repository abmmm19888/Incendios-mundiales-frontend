# 🔥🔥🔥 FIRE TRACKER 🔥🔥🔥
### Index
- [General Information](#general-information) 📝
- [Technical Competencies](#technical-competencies) 💪🏼
- [Technologies](#technologies) 📲
- [Tools](#tools) 💅🏼
- [Installation](#installation) 🛠️
- [Farewell](#farewell) 🖖



##  General Information 📝
***
FIRE Tracker is a project developed by our consulting firm to provide an interactive dashboard displaying real-time data on the active fires in Spain using the [NASA API](https://firms.modaps.eosdis.nasa.gov/api/country/). The goal is to offer a data visualization platform with real-time analysis and scalability for future emergencies.

This project aims to:

- Provide an Interactive Data Visualization Platform
- Enable Real-Time Data Analysis
  
The design, mockups and prototypes were made by [Angelina](https://github.com/Angelinabassano). 



## Technical Competencies 💪🏼
***
The project is designed to:

- Apply fundamental Vue concepts.
- Apply fundamental API consumption concepts through services.
- Implement functional programming.
- Perform back-end testing.
  
###Competencies
Creating a dynamic and adaptable web user interface.
Creating a data visualization user interface.



##  Technologies 📲
***
A list of the technologies used in the project: 

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5): Version 5.0
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS): Version 3.0
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Version ES14
* [NODE.js](https://nodejs.org/en): Version 22.3.0.
* [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
* [Git](https://git-scm.com/): Version control system . Used together with Github, a hosting platform for software development and version control.
* [Editor.md](https://pandao.github.io/editor.md/en.html): A simple online markdown editor.
* [Python](https://www.python.org/downloads/): v 3.0]
* [Docker](https://www.docker.com/): v 4.31



##  Tools 💅🏼
***
A list of the tools used in the project:  

* [Vue](https://vuejs.org/): Version ^3.4.29
* [View router](https://router.vuejs.org/)
* [@fawmi/vue-google-maps](https://github.com/fawmi/vue-google-maps): ^0.9.79
* [Bootstrap](https://getbootstrap.com/): v5.3.3 Build fast, responsive sites with Bootstrap.
* [Sass](https://sass-lang.com/): version 1.77.6
* [FAST API](https://fastapi.tiangolo.com/)



##  Installation 🛠️
***
#Requisites: 

- Node.js
- DOCKER 

1. Frontend: Clone the repository git clone https://github.com/abmmm19888/Incendios-mundiales-frontend.git

2. Backend:  Clone the repository git clone https://github.com/abmmm19888/Incendios-mundiales-backend.git 

3. Frontend installation: In your Frontend directory type   
   - npm i
   - npm run dev

4. Backend installation: Install Docker and use docker-compose to create database and API containers (you can open two tabs):

  - docker-compose up db
  - docker-compose up api

  You can list running containers by running:

    - docker ps

  You can update fire data by running:

    - docker exec -it $CONTAINER_ID /venv/bin/python3 update-fires.py

  You can use the API directly throught the browser by going to http://API_HOST:API_PORT/docs

  Open your browser and navigate to http://localhost:8000 to access the user interface. Use the map to see active fires in real time. 



##  Mockups:
***

![HOME](https://i.ibb.co/1JZ31x5/HOME.png)
![MAP](https://i.ibb.co/4fF5SrQ/MAPA.jpg)
![LOGIN](https://i.ibb.co/Ry9h57N/LOGIN.jpg)


##  Farewell 🖖
***
Thanks for taking the time to check out our project! We hope it provides valuable insights and contributes to a better management of fires.


## Our team :

***
 
<p> <a href="https://github.com/Angelinabassano">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Angelina**</a></p>
    
<p> <a href="https://github.com/0795PAO">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Paola**</a></p>
    
<p> <a href="https://github.com/loren-2">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Lorena**</a></p>
    
<p> <a href="https://github.com/abmmm19888">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Abraham**</a></p>
    
<p> <a href="https://github.com/aitorgarciafernandez">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Aitor**</a></p>

<p> <a href="https://github.com/Jorgecas71">
   <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Jorge**</a></p>

<p> <a href="https://github.com/marc-canals-basetis">
   <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> **Marc**</a></p>


We are a team of 5 frontend developer trainees and 2 backend developers who collaborated at this project within the framework of a Hackaton organized by Factoria F5. We were asked to deliver results within 2 days.
