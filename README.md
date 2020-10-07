# Vault Clothing
![file](https://user-images.githubusercontent.com/63016300/95338522-500b0600-08b3-11eb-95db-085da3d56ab4.png)
This is a repository of my personal project "Vault Clothing". 

## Overview
Vault Clothing is a e-commerce website. Application's interface is built with react and GSAP for animations. Backend is handled by firebase/firestore, express and stripe for payments.

## Getting started
You need to have Node.js and npm installed to run this project locally. In your terminal provide commands below:

```
# Clone the project.
npm clone https://github.com/bartlomiejwiejak/vault-clothing.git

# Install npm dependencies.
npm install
```

Application uses env variable which is stripe key. In root folder create .env file:

```
# .env file
STRIPE_SECRET_KEY=YOUR_STRIPE_KEY
```

After that, you are able to run this project without any problems, by running commands:

```
# runs backend server:
npm run nodemon

# runs frontend:
npm start
