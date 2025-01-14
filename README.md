# LDotR

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/vishal400/LDotR.git
cd crud
```


### 2. Build and Run the Application with Docker
Use Docker Compose to build and start the application:

```bash
docker-compose up --build
```

### 3. Access the Application
Open your browser and go to http://localhost:5000

## Questions
### Git Commands to initialize, commit and push changes
#### 1. `git init` to initialize the directory
#### 2. `git add .` to add all the changes
#### 3. `git commit -m <message>` to commit the changes with the commit message
#### 4. `git remote add origin <remote repository link>` add remote repository
#### 5. `git push -u origin` to push all changes

### Branching Strategy
#### Uses separate branches for development (develop), production (main), and features (feature/feature-name). Create a feature branch from develop, work on the feature, and once completed, merge it back into develop. After testing, the develop branch is merged into main for release.

### Guide to merge conflicts
#### 1. First checkout develop branch
#### 2. Pull the latest changes
#### 3. Check back into feature branch
#### 4. Merge develop branch into feature branche
#### 5. Resolve conflicts by checking "incoming should be include" or "current should be included" or "both should be include"
#### 6. Push the changes

### Containerization
#### Docker simplifies deployment and ensures consistency across environments by packaging the entire MERN stack and its dependencies in separate containers. It increases scalability, reduces conflicts, and simplifies the CI/CD process. A real-world application is to create an efficient development environment where all team members run the same application container, which solves the issues like code works on one's machine but not other's for example.