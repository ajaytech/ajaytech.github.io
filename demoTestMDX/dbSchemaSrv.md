---
id: dbSchemaSrv
title: DB, Schema and SRV
---

Steps For creating Schema and Database(Local With Sqlite3) and Service

 ## Step 1: DB and CSV Folder
 
 Add a folder named db in the project directory

 ```sh
      mkdir db 
```
Inside db folder create another folder csv

```sh
      mkdir csv
``` 

## Step 2: Create the CDS Data Structure

Now we will create the data structure for our project, in this case we will create a simple Student entity 

### Create CDS

Create a .cds file where we are going to add the CDS structure

```sh
   touch filename.cds
```

### Entity Model

Inside cds file  create db model as shown below

 ```sh
    namespace myCompany.hr.lms;
    entity Students{
        key email : String(65);
        first_name : String(20);
        last_name : String(20);
        date_sign_up : Date;
    }
```  
Here key is assigned as email and key is also a required field. 

## Step 3: Add CSV Data

Inside CSV folder create file using command

```sh
    touch filename.csv
```  
Add data to the file as shown below, here we are adding data entries. The first row is coloum attribute followed by Data values of the respective Structure we created above.

```sh
email;first_name;last_name;date_sign_up
demo@demo.com;demo;demo;2019-10-10
john@demo.com;john;din;2019-10-10
``` 
  ***Note:*** The `filename` should be same as the absolute path of the CDS entity, in this case this is `myCompany.hr.lms-Students`. So internally CAPM lib connects CSV Data to CDS entity.

 ## Step 4: Create Service

In srv folder, we are going to create a projection without above cds structure. This will expose the CDS entity as Service. 


 ***Note:*** In this service, we have assigned an annotation on entity student which is `@readonly`. This annotation will restrict the entity to be read-only which means using the service entity records cannot be updated, deleted or inserted.
Also, here we have to be careful of the namespace, we have used the namespace myCompany.hr.lms so the service needs to use lms.Students to refer to our Student Entity in CDS view above.


```javascript    

using myCompany.hr.lms from '../db/<Your CDS Entity File Name>';

service  first{
   @readonly entity Students as projection on lms.Students;
}
``` 

## Step 5: Installing sqlite3 and Running

We can run locally with sqlite3 module, which will allow us to quickly test the result

So, let's add sqlite3 in our project
```sh    
  npm i sqlite3
```
Now, lets run the CDS view, we are using `--in-memory` tag so that CDS will run using sqlite3 DB

```sh    
  cds run --in-memory
```
Also, if you want to deploy data to sqlite3 permanently then you can use 

```sh
  cds deploy --to sqlite
```
After running the deploy command, the output in console will be 

```sh
  > filling myCompany.hr.lms.Students from db/csv/myCompany.hr.lms-Students.csv
  /> successfully deployed to ./sqlite.db
  > updated ./package.json
 ```
 And you will also see a `sqlite.db` file added to your project.

 Now you can just use `cds run` next time to run app with data from sqlite DB. Also, you can use `cds run --in-memory` if in case, you changed some data/data structure(CDS) and want to quickly test in-memory.

 
 ## Step 6: Final Result

 We will have our application running in port 4004 by default, if we open ***http://localhost:4004*** we will find our application running.

 For seeing the data you can go to the URL: ***http://localhost:4004/first/Students***
 
 
  ```javascript
  {"@odata.context":"$metadata#Students",
  "@odata.metadataEtag":"W/\"FUwMtxpIrUe7k/V4eF2OyWTA9Qv5dMundzkfj2iqOWk=\"",
  "value":
  [
    {"email":"demo@demo.com",
      "first_name":"demo",
      "last_name":"demo",
      "date_sign_up":"2019-10-10"},
      {"email":"john@demo.com",
      "first_name":"john",
      "last_name":"din",
      "date_sign_up":"2019-10-10"}
    ]}
  ```
