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


# Custom PIPES
* Checkout Pipe.ts and its importing in the controller under add method

# Custom validation via external pipe.ts
![alt text](image-11.png)


*Note check for the DTO file which should have @IsInt Decortr first and than create pipe.ts file 

        ```
            const bookClass = plainToInstance(Book, value);
        ```
the above line is basically transforming the values came as input into a class(object/instance) called bookClass with refernce to structure defined in BookDto  here the @IsInt()  validtrs are not considered

        ```
    const errors = await validate(bookClass);
        ```
the above line is creating array of erros and  here the @IsInt()  validtrs are CONSIDEREd since have to validate

  
  * FOR True case 

![Passed](image-13.png)


  * FOR FAILED  case 
  we passing id as string
  and title as number

![Failed](image-14.png)


# Builtind validation via internal pipe method/function

* BEST Practice to you since nest handles the class transformer and class validation method.

Controller.ts
```
    @Post('/add2')
    addbook2(@Body(new ValidationPipe()) book: Book): any {
        return this.bookservice.addbook(book)
    }

```
Failed Case
![Failed Case](image-12.png)


Passed Case
![alt text](image-16.png)

## for random id generation

*for testing purpose dont use this when sending id value manually you can remove the code 

![alt text](image-15.png)

```bash
$ npm install   

$ npm install uuid
```


# Custom Exceptions

include in the controller 
```
    @Get("")
    hellobook(): string {

        throw new CustomException

        throw new BadRequestException

        //since the above code executes the below code wont be considered and vice versa
        return "Hello this is the first page without routes"
    }

```
![alt text](image-17.png)


Sending Custom Response just to have log we can use custom Filters check Bookfilter.ts

```
    @Get("/custfiltexcept")
    @UseFilters(BookFilter)
    custfiltexcept(): string {

        throw new BadRequestException

        //since the above code executes the below code wont be considered and vice versa
        return "Hello this is the first page without routes"
    }
```

![alt text](image-18.png)

## Running the app

```bash

# watch mode
$ npm run start:dev



```