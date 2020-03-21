---
id: annotationUI
title: Create UI with Annotation
---
Getting data in Fiori UI with annotations, just by using services.

 ## Step 1: Missing Part
 
 If we go inside by clicking on `in Fiori` link as shown below in the service output

![Output](https://i.ibb.co/rpQngMp/dashboard.png)

We will get a Fiori based App with no data, as shown below

![Output](https://i.ibb.co/rpQngMp/dashboard.png)

The issue here is that we have not added Annotation(s) in our data definition. 
Annotations are required for UI to know how to bind the data to UI fields.

 ## Step 2: Adding Annotations to Entities

 We can add the UI Annotations to the CDS file present inside the db folder 
  
  ```javascript

    annotate Students with @(
    UI: {
       
        LineItem: [
            {Value: email,
            Label:'Email'}
                ]
        }
    );

``` 

### Explaning the Annotations

- Here, we are using `annotate` keyword to add Annotations to entity Students
- `UI` keyword specifies that its going to be added to UI
- In selection field we add the entity fields
- In Lineitem we add the column attributes via `label` and data value by `value` keyword
- In identification we add the key of the entity

## Step 3: Adding Header Annotations


We can also add header fields with annotations with using `HeaderInfo` keywords. 
This will show us the data, when we navigate to next page.

So, the updated Annotations are below

```javascript
 
annotate Students with @(
    UI: {
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
        //To add header info
    HeaderInfo: {
      Title: { Value: email },
      Description: { Value: first_name }
    }
}
);
```

### Final CDS Code

Now the final CDS file inside db folder will apread as below

```javascript
namespace myCompany.hr.lms; 
entity Students{
    key email : String(65);
    first_name : String(20);
    last_name : String(20);
    date_sign_up : Date;
}
annotate Students with @(
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
        //To add header info
    HeaderInfo: {
      TypeName: 'email', TypeNamePlural: 'Emails',
      Title: { Value: email },
      Description: { Value: first_name }
    }
}
);


```

## Step 4: Restart Server With New Code

Now if we restart the server with new code, we will see the Data in Fiori App, which previously we were not able to see with `Fiori Preview`.

This is how front page will look like

![Output](https://i.ibb.co/qJ0cMfQ/withdata.png)


When we click on any Line item, we can navigate to detail page and also see the Header Info, as per our Annotation

Note: Here the Title which is `email` is not shown because the detail page(where we navigate) is not Object Page.

![Output](https://i.ibb.co/p0x07Fz/next-page.png)
