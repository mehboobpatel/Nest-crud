<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## architecture : 
![alt text](image-1.png)


# Middleware Concept:
![Architecture ](image-2.png)
![types of middle ware](image.png)


* Check the code in Main.ts and book.middleware.ts
![Output of Modular and global](image-3.png)


# Pipes Concept:

![pipes architecture](image-4.png)

* So we here we checking the input type from the controller before passing to service function

![alt text](image-5.png)

![alt text](image-6.png)

After adding ParseIntPipe in the code we now get the desired input
![alt text](image-7.png)

![alt text](image-8.png)

Validation if you pass any thing apart from number in the url than pipe will throw error
![alt text](image-9.png)

Otherwise it wil give you the array
* note u can directly return without console.log in the service.ts function of findbookbyid

![alt text](image-10.png)

## Installation

```bash
$ npm install   

$ npm install uuid
```

## Running the app

```bash

# watch mode
$ npm run start:dev



```