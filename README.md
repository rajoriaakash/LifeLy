# LifeLy
## Overview

This project is a comprehensive child mental health platform utilizing machine learning and AI to predict, prevent, and manage diseases. It introduces 30 targeted questions to predict probable disorders and offers tailored recommendations for specialists and exercises. Additionally, it provides a range of solutions for parents, spanning from easy-to-do home exercises to specialized doctor recommendations. 
The platform integrates an AI-powered chatbot that provides human-like responses, resolving queries, and offering guidance related to mental health concerns in children.

## Purpose

The purpose of this platform is to assist parents in detecting potential mental health issues in their children. Often, early symptoms are overlooked, and this platform aims to bridge that gap by enabling early intervention and treatment, thus improving the chances of successful management and recovery.

## Features and Functionalities

- **Raising Awareness:** The platform spreads awareness about the importance of early mental health diagnosis through statistics and data, emphasizing the significance of early intervention.

- **Probabilistic Detection Model:** Utilizes a model to assess the likelihood of a child having a particular mental health condition by employing a general questionnaire about the child's daily activities and behavior.

- **AI-Powered Chatbot:** Integrated with an AI-powered chatbot that engages in human-like conversations. This bot provides information, helps parents comprehend mental health concerns, recommends steps and precautions, and acts as a virtual therapist. It's trained on recommended books and therapist guidance.

- **Comprehensive Solutions:** Offers a one-stop solution for parents by providing access to specialized doctors in the locality with exclusive discounts for potential diseases identified, eliminating the need for extensive searches. Also lists integrated schools to ensure inclusivity for children with mental health concerns.

- **Home Exercise Programs:** Provides easy-to-follow home exercise routines, including meditation, specific yoga practices, and more, supplemented with YouTube tutorials aimed at aiding various mental health issues.

- **Newsletter Subscription:** Allows users to subscribe to a newsletter for ongoing updates, tips, and information related to child mental health.


## Getting Started with Development

To begin working on this project, follow these steps:

1. **Fork this Repository:** Click on the 'Fork' button in the top right corner of this page to create your own copy of the repository.

2. **Clone the Repository:** Use the following command to clone the repository to your local machine:

    ```bash
    git clone https://github.com/{your-username}/Lifely.git
    ```

3. **Ensure pip and npm are Installed:** Make sure you have `pip` (Python package manager) and `npm` (Node.js package manager) installed on your machine. If not installed, you can install them by following these links:
    - [Install pip](https://pip.pypa.io/en/stable/installation/)
    - [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

4. **Add Environment Variables:** Create a `.env` file in the `/server` folder and add the following variables:
   
    Environment variables store sensitive or configurable data required for the application to function properly. In this case:
    - `MONGO_URL`: Your MongoDB connection URL.
    - `JWT_SECRET`: Secret key for JSON Web Token generation.
    - `PORT`: Port number for the server.
    - `GMAIL_PASSWORD`: Password for the Gmail account used by Nodemailer.
    - `OPENAI_API_KEY`: API key for OpenAI integration.
    - `SECRET_KEY`: Any 32-length string for security purposes.

5. **Update Configuration Values:**

    - **NodeJS Server Configuration:** Navigate to `client/config.js` and modify the `SERVER_URL` value to point to your local server, usually `http://localhost:3001`.
    - **FastAPI Configuration:** Head to `server/config.js` and update the `FASTAPI_SERVER_URL` value to point to your local FastAPI server, usually `http://localhost:8000`.
    
   These changes ensure that any client-side requests are directed to the locally running servers instead of the deployed versions.

6. **Open in Code Editor:** Open the repository in your preferred code editor.

7. **Install Dependencies and Start Server:** Run the following commands in the root directory of the project:
    
    - `npm run install-deps`: This command installs all the required libraries and packages needed for the project in one go, as specified in the project's configuration files.
    - `npm start`: This command initiates the server and client concurrently.

8. **Continue Development:** You're all set! Continue development by implementing new features, fixing bugs, or contributing to the project.


## To continue with development

1. **Create a Branch (Optional):** If needed, create a branch in your local repository using the command:

    ```bash
    git checkout -b <branch-name>
    ```

2. **Working on Specific Features (Optional):** Consider focusing on one particular branch for working on a specific feature or a set of related features.

3. **Stage Changes:** After making necessary changes, stage them for commit using:

    ```bash
    git add .
    ```

4. **Commit your Changes:** Use the following command to commit your changes with a descriptive message:

    ```bash
    git commit -m "{your commit message}"
    ```

5. **Syncing with Main Repository:** Before pushing your changes, ensure your repository isn't behind the main repository:

    - Visit your remote repository and use the "Sync Fork" option.
  
6. **Check for Changes:** If changes are synced, navigate to your local repository and run:

    ```bash
    git pull
    ```

7. **Resolve Merge Conflicts (If Arise):** If any merge conflicts arise, resolve them manually in your code editor.

8. **Push Changes to Remote Repository:** After resolving conflicts (if any), push your changes to your forked repository:

    ```bash
    git push
    ```

9. **All Done:** Your changes are now updated in your repository. Continue your development process or contribute by creating a pull request if you've made changes to improve the main repository.

## Deployed Versions

### Server:
- **FastAPI Backend:** [https://lifely-p9p9.onrender.com](https://lifely-p9p9.onrender.com)
  
  This link directs to the deployed FastAPI backend.

- **Node.js Server:** [https://lifely-mern.onrender.com](https://lifely-mern.onrender.com)
  
  Access this link for the Node.js server deployment.

### Client:
- **Client App:** [https://lifely-client.onrender.com](https://lifely-client.onrender.com)
  
  Visit this link to interact with the deployed client application.


