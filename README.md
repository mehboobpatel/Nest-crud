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

*BEST WAY to Define Exception is inside controllr 

```
    @Get("/definedincontr")
    definedincontr(): string {

        throw new BadRequestException( {
            status: 400,
            error: "this is defined in controller function",
            host: "localhost",
            anything: "asdf",
            numberany: 123
        })
    }
```

![alt text](image-19.png)

##Guards

* to validate the url content like if theres any 
* string or header that is must required we use guard 
* and than include it in controller using @UseGuard
* you can apply it on single method by mentioning 
* below @Get or apply it to whole controller all methods by 
* mentioning it below @Controller
* to use it globally throughout the app u need to add app.use in App.Module or root module file
![alt text](image-22.png)

![alt text](image-20.png)

Passed: 
![alt text](image-21.png)


## INTERCEPTORS

    Middleware intercepts the incoming request and performs pre-processing tasks.

    Route handler processes the request and generates a response.

    Interceptor intercepts the outgoing response and performs post-processing tasks.

![interceptr](image-23.png)


![alt text](image-24.png)
![alt text](image-25.png)



## Authentication 

We will be using Passport library for authentication 
https://www.passportjs.org/packages/
process Passport helps to create Strategies which are utilized by Guards

checkout 
https://docs.nestjs.com/recipes/passport


we first install 
```
npm install --save @nestjs/passport passport passport-local

npm install --save-dev @types/passport-local

```

firstly create User class with name user.entity.ts (similar to DTO but not DTO)

Than add array of user list in usre.service.ts and define the validate function in the same


Post that create a Auth folder/Auth Module under src

create strategy file (passport.local.strategy)
and define the pre validate function which will call the service validate function.

CHECKS :---
passed case
![Passed case](image-26.png)

failed case for wrong password
![alt text](image-27.png)

failed case for wrong Username
![alt text](image-28.png)


## AUHTORIZATION
install 
```
npm install --save @nestjs/jwt passport-jwt

npm install --save-dev @types/passport-jwt
```

modify the app.controller endpoint

with 
```
  @Get('hello')
  @UseGuards(AuthGuard('local'))
  gethello(@Request() request) : any{

    const token = this.authservice.generateToken(request.user)
    console.log(token)
    return request.user
  }
```

than create auth.service.ts ( for a Token generation function in the whole payload(i.e request object containing all data))

* check the auth.module.ts to import builtin module(JWT module )

* check the jwt.strategy.ts super() method


now when we send a request with username and password 
it first calls the 

1. 
  @Get('hello')
  @UseGuards(AuthGuard('local'))

than it will pass to passport.local.strategy.ts
2. 
 validate(username: string,password : string): any
    {          
        console.log('Hello ')


        const user : Users = this.userService.getUserbyname(username,password)
        if(!user){
            console.log("User not found in strategy",username)
        }
        if(user == undefined) {
            throw new Un

3. than it will pass to the user.service.ts 

getUserbyname(userName: string, password: string): any {
  console.log(userName, ' sds', password);
  if(user1){

  if (user1.password !== password || user1.password.length === 0) {
    console.log('Password does not match for user:', userName);
    return user1;
  }

Than ONCE YOU RECIEVED correct username and password 

it will again pass loopback and give the control to app controller and will excecute the method define in the method

```
  gethello(@Request() request) : any{
    const token = this.authservice.generateToken(request.user)
    console.log(token)
    return request.user
  }
  ```

4. than inside this it will generate the token by calling
the AuthService Generatetoken function 

```
export class AuthService {
    constructor(private readonly jwtservice : JwtService){

    }
    //idCard
    generateToken(payload: Users): string{
        return this.jwtservice.sign(payload)
    }
}
```

which creates a token and stores it in the token variable


```
 const token = this.authservice.generateToken(request.user)
    console.log(token)
    return request.user
```

so you got the token 

![Token generated](image-29.png)

Now use this token and hit androiddev route

* now under thunderclient/postman check for Auth and just add this token under bearer option

![bearer token](image-30.png)


## ROLE BASED GUARD
add role: string in the Users.entity.ts
and in auth.constant.ts define ROLEs
and in userservice.ts array add the role elemnt to the object

create route for webdev in controller

now the thing is even the androiddev role can access webdev 

proof:
![token](image-31.png)

![alt text](image-32.png)



Androidev: 
![alt text](image-33.png)

androiddev accesing WebDev with same access token
![alt text](image-34.png)

SO to avoid these we will use role.guard.ts 








## Running the app

```bash

# watch mode
$ npm run start:dev



```