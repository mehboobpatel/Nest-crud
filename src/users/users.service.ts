import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './users.entity';
import { CONSTANTS } from 'src/auth/auth.constants';

@Injectable()
export class UsersService {
  public usersarray: Users[] = [
    {
    username: "Maheboob",
    password: "password",
    email: "maheboob.p@kelpglobal.com",
    age: 22,
    role: CONSTANTS.ROLES.ANDROID_DEVELOPER
  },
  {
    username: "User2",
    password: "password",
    email: "user2@kelpglobal.com",
    age: 25,
    role: CONSTANTS.ROLES.WEB_DEVELOPER

  }
]

 getUserbyname(userName: string, password: string): any {
  console.log(userName, ' sds', password);

  // if (!userName || !password || userName.length === 0 || password.length ===0) {
  //     console.log('No username or password passed');
  // }
// THE ABOVE CODE wont get executed since the strategy--->,
//--> or this funciton wont get called if empty string or data is being passed

const user1: Users = this.usersarray.find((user) => user.username === userName);
if(user1){

  if (user1.password !== password || user1.password.length === 0) {
    console.log('Password does not match for user:', userName);
    return user1;
  }
  else{
    console.log('Password matched for user:', userName,
     "and here is the user object", user1);
    return user1;
       }
}
else {
    console.log('Input u gave for user doesnt exist with username :', userName);
    return user1;
}


}




// Other methods...


  constructor() {
    // console.log('its working')
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
