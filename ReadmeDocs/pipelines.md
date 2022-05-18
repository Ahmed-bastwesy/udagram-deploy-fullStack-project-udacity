## Udagram Pipeline

![Circleci](Circleci.png)

### Continuous Integration
#### CircleCI
CircleCI reads the `.circleci/config.yml` file 
there are 5 jobs to be run by CircleCI.
      - run:
          name: Back-End Install
          command: |
            npm run backend:install
      - run:
          name: Back-End Build
          command: |
            npm run backend:build
      - run:
          name: Front-End Install
          command: |
            npm run frontend:install
      - run:
          name: Front-End Build
          command: |
            npm run frontend:build
      - run:
          name: Front-End Deploy
          command: |
            npm run frontend:deploy
- **Back-End Install**: Runs the `npm run backend:install` script given in the `package.json` file

- **Back-End Build**: Runs the `npm run backend:build` script given in the `package.json` file

- **Front-End Install**: Runs the `npm run frontend:install` script given in the `package.json` file

- **Front-End Build**: Runs the `npm run frontend:build` script given in the `package.json` file

- **Front-End Deploy**: Runs the `npm run frontend:deploy` script given in the `package.json` file