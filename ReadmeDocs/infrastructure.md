## Udagram Infrastructure

![InfrastructureImg](InfrastructureImg.png)


#### RDS Postgres
The application server uses AWS RDS Postgres as database for storing and retrieving information.

Database: 
`postgresql://postgres:postgres@database-1.cpwyivf44ots.us-east-1.rds.amazonaws.com:5432/postgres`

#### S3 Bucket
frontend side is deployed using AWS S3 Bucket

S3 Bucket URL: `http://bastwesyudagrambucket.s3-website-us-east-1.amazonaws.com`
  
#### Elastic Beanstalk
backend side is deployed on AWS Elastic Beanstalk service

EB URL: `http://udagram-env.eba-x5syx7ep.us-east-1.elasticbeanstalk.com`

