---
id: installation
title: Installation
---


  ## Step 1: Set NPM registry of SAP®

NPM registry points to a place where libraries are present. When NPM installs a package, then it looks to that place to find the library.

**Example**: Suppose, you have a registry at `www.mycoolrepo.com` where you are having your `xyz` library(or module). 
When you use `npm install xyz` it should search your `www.mycoolrepo.com` for the `xyz` module, then download that to the current project where you are working.

In the case of CAPM and related development, we are going to use `https://npm.sap.com` NPM registry to install required Node Modules

```sh
    npm set @sap:registry=https://npm.sap.com
```

## Step 2: Confirm installation

We will list all the NPM repository present in our computer

 ```sh
 npm config list
 ```
On successful Installation we will see npm.sap.com as registry:

![Output](https://i.ibb.co/vJT8QvL/2.png)

## Step 3: Install @sap/cds

@sap/cds will provide us `cds` command access in terminal/command prompt.
Using `cds` we will be able to:

- Create
- Run
- Build

CAPM Code Locally.

We can -g flag with the command to install @sap/cds-dk globally

```sh
    npm install -g @sap/cds-dk
```
## Step 4: Confirm installation

To confirm installation of @sap/cds use command

```sh
  cds
```

You will get the output as shown below

```sh
USAGE
    cds <command> [<args>]
    cds <src>  =  cds compile <src>
    cds        =  cds help
COMMANDS
    i | init       jump-start cds-based projects
    c | compile    process models selectively
    m | import     add models from external sources
    s | serve      run servers locally
    r | repl       read-eval-event loop
    e | env        get/set cds configuration
    b | build      prepare for deployment
    d | deploy     e.g. to databases or cloud
    v | version    get detailed version information
    ? | help       get detailed usage information
    Learn more about each with:
    cds help <command> or
    cds <command> ?
```
## Step 5: Search modules inside registry

You can search inside ***https://npm.sap.com*** registry to see all 
packages it contains with command

```sh
 npm search --registry https://npm.sap.com sap
```

Output
```sh
    NAME                      | DESCRIPTION          | AUTHOR          | DATE       | VERSION  | KEYWORDS
@sap/approuter            | Node.js based…       |                 | 2019-11-12 | 6.6.0    |         
@sap/site-entry           | SAP Portal…          | =Portal Team    | 2019-08-07 | 1.30.0   | 
@sap/grunt-sapui5-bestpra | Grunt tasks around…  |                 | 2019-10-03 | 1.4.2    | 
ctice-build               |                      |                 |            |          | 
@sap/xsjs                 | Compatibility layer… |                 | 2019-11-20 | 5.3.0    | 
@sap/xssec                | XS Advanced…         |                 | 2019-09-02 | 2.2.3    | xs
@sap/cds                  | Entry Point and API… |                 | 2019-11-18 | 3.18.4   | 
@sap/node-jwt             | JWT validation…      |                 | 2019-09-27 | 1.6.5    | jwt security sap xs
@sap/xsodata              | Expose data from a…  |                 | 2019-10-28 | 4.7.0    | odata xsjs
@sap/hdbext               | Hana-client…         |                 | 2019-11-20 | 6.1.1    | HDB hana sap sql hdi
@sap/portal-cf-content-de | SAP portal site…     | =Portal Team    | 2019-11-20 | 3.24.0-… | portal content-deployer
ployer                    |                      |                 |            |          |                        
@sap/cloud-sdk-core       | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
@sap/cloud-sdk-test-util  | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
@sap/cloud-sdk-vdm-accoun | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
ting-document-service     |                      |                 |            |          | 
@sap/cloud-sdk-vdm-attach | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
ment-service              |                      |                 |            |          | 
@sap/cloud-sdk-vdm-bank-d | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
etail-service             |                      |                 |            |          | 
@sap/cloud-sdk-vdm-batch- | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
service                   |                      |                 |            |          | 
@sap/cloud-sdk-vdm-bill-o | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
f-material-comparison-ser |                      |                 |            |          | 
vice                      |                      |                 |            |          | 
@sap/cloud-sdk-vdm-bill-o | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
f-material-service        |                      |                 |            |          | 
@sap/cloud-sdk-vdm-bill-o | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
f-material-v2-service     |                      |                 |            |          | 
@sap/cloud-sdk-vdm-bill-o | SAP Cloud SDK for…   |                 | 2019-11-21 | 1.13.1   | 
f-material-where-used-ser |                      |                 |            |          | 
vice                      |                      |                 |            |          | 
```