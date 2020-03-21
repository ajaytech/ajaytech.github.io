---
id: ui5app
title: Creating Custom UI5 App
---

In this part, we are going to make a UI5 App. This will allow us to separate View Code From Data Definition, i.e. the Annotations we have written in CDS view, we can separate it in UI5 App.

We can also provide our user with a Fiori® Launchpad experience and customize further the UI components.

## Step 1: File structures

Create an app folder inside the project root. This will hold all our UI codes
 
```sh
    mkdir app
```

Create the UI Project Structure as below, here we have app as root for UI project, inside this we have `index.cds`, `index.html` and `studentsDetails` folder.

`studentsDetails` Folder contains `webapp` folder which has `Component.js`,  `manifest.json` and `fiori-service.cds`

```sh
|-- app
    |-- index.cds
    |-- index.html
    |-- studentsDetails
        |-- webapp
            |-- Component.js
            |-- manifest.json
            |-- fiori-service.cds

```

## Step 2: index.html Code

- In file `index.html` we are going to add a tile that represents our Fiori® App. The template Code for the inde.html is as below

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LMS Students</title>
    <script>
      window["sap-ushell-config"] = {
        defaultRenderer: "fiori2",
        applications: {
          "manage-Students": {
            title: "Manage Students",
            icon: "sap-icon://documents",
            description: "Students Management",
            additionalInformation: "SAPUI5.Component=studentsDetails",
            applicationType: "URL",
            url: "/studentsDetails/webapp",
            navigationMode: "embedded"
          }
        }
      };
    </script>
    <script src="https://sapui5.hana.ondemand.com/test-resources/sap/ushell/bootstrap/sandbox.js"></script>
    <script
      src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
      data-sap-ui-libs="sap.m, sap.ushell, sap.collaboration, sap.ui.layout"
      data-sap-ui-compatVersion="edge"
      data-sap-ui-theme="sap_belize"
      data-sap-ui-frameOptions="allow"
    ></script>
    <script>
      sap.ui
        .getCore()
        .attachInit(() =>
          sap.ushell.Container.createRenderer().placeAt("content")
        );
    </script>
  </head>
  <body class="sapUiBody" id="content"></body>
</html>
```

## Step 3: index.cds Code

In index.cds we are going to add reference to file where our `CDS UI Annotations` are defined. In this file, we can give one or more `cds` file path. This also brings modular structure to our app as well.

Code of index.cds is

```javascript
using from './studentsDetails/fiori-service';
```

## Step 4: component.js Code

Inside `webapp` we will add a file named component.js which will basically describe about `UI5/Fiori App`. This also, includes the `manifest.json` information, which we are going to define in next step

```javascript
sap.ui.define(["sap/fe/AppComponent"], ac =>
  ac.extend("studentsDetails.Component", {
    metadata: { manifest: "json" }
  })
);
```

## Step 5: manifest.json Code

 In manifest.json file we are going to define data source of service, routes, App title etc.
 
 Below is the blank template of the manifest.json

```javascript 
{
    "_version": "1.8.0",
    "sap.app": {
      "id": "student",
      "type": "application",
      "title": "Students Details",
      "description": "studentsDetails",
      "dataSources": {
        "<Data Source Name>": { 
          // example: mysrvdemo or first 
          // which is your service name

          "uri": "<URL>", // example: /mysrvdemo/ or /first/
          "type": "OData",
          "settings": {
            "odataVersion": "4.0"
          }
        }
      }
    },
    "sap.ui5": {
      "dependencies": {
        "libs": {
          "sap.fe": {}
        }
      },
      "models": {
        "": {
          "dataSource": "<dataSources Name>",
          "settings": {
            "synchronizationMode": "None",
            "operationMode": "Server",
            "autoExpandSelect": false,
            "earlyRequests": false,
            "groupProperties": {
              "default": {
                "submit": "Auto"
              }
            }
          }
        }
      },
      "routing": {
        "routes": [ {
          "pattern": ":?query:",
          "name": "Student",
          "target": "Student"
        }
        ],
        "targets": {
          "Student": {
              "type": "Component",
              "id": "Student",
              "name": "sap.fe.templates.ListReport",
              "options": {
                "settings": {
                  "entitySet": "<Name of Structure>"
                  //example: Students 
                }
              }
            }
        }
      }
    }
  }
```
## Step 5: fiori-service.cds Code

 Inside `fiori-service.cds` we define the annotations for the UI according to which data will be rendered in screen

```javascript
using first from '../../srv/schema';
annotate first.Students with @(
	 UI: {
    SelectionFields: [ email,first_name],
    LineItem: [
      {Value: email,
            Label:'email'},
      {Value: first_name,
            Label:'first_name'},
      {Value: last_name,
            Label:'last_name'},
      {Value: date_sign_up,
            Label:'date_sign_up'}
    ],
  HeaderInfo: {
      TypeName: 'email', TypeNamePlural: 'Emails',
      Title: { Value: email },
      Description: { Value: first_name }
    }
}
);
```
## Step 6: Run the App

Now save all files and run the App:

```sh

cds run --in-memory

```

## Step 7: Output

You will see now a Fiori® Launchpad with you App placed as a Tile. If you go inside you will see List based elements showing Students details.

Fiori Launchpad:

![Output Fiori Launchpad](https://i.ibb.co/646P2nD/Screenshot-9.png)

Data of Studets:

![Output Fiori Launchpad](https://i.ibb.co/5j0TYsB/Screenshot-8.png)