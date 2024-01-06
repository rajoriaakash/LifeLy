# LifeLy
 #### To start with the development
 1. Fork this repositry.
 2. Clone it using "git clone https://github.com/{your-username}/LifeLy-CODEX.git"
 3. Add you .env file in /server folder.
 4. .env file looks like this:
      MONGO_URL="{your mongo connection url}"
      JWT_SECRET = "{your jwt secret}"
      PORT=3001
      GMAIL_PASSWORD="{your gmail password for nodemailer}"
      OPENAI_API_KEY=<your-openai-key>
      SECRET_KEY=<any-32-length-string>
 5. Open the repo in your code editor.
 6. Run the following commands in root directory:
      - npm run install-deps
      - npm start
 7. FastAPI backend is deployed on https://lifely-p9p9.onrender.com
 8. This will start the server deployed on (https://lifely-mern.onrender.com) and client deployed on (https://lifely-client.onrender.com).
 9. Continue Development.


#### To continue with development
1. Create a branch in your local repositry by git checkout -b <branch-name> ( not necessary for this project)
2. Continue working in that one particular branch for one particular feature or one particular class of features. (not necessary for this project)
3. After making necessary changes, use git add .
4. Then use git commit -m "{your commit message}"
5. Before pushing your changes, firstly check if your repo isnt behind the main repo.
6. To do that, go to remote repo, and Sync fork.
7. If there are changes, do git pull in local repo.
8. If merge conflicts arise, resolve them manually.
9. After that, do git push.
10. Done
