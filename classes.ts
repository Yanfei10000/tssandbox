interface UserInterface{
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}



class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number){
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: '+this.name);
  }

  register(){
    console.log(this.name+' is now registered');
  }

  payInvoice(){
    console.log(this.name+ ' paid invoice');
  }

}


class Member extends User{
  id: number;

  constructor(id: number, name: string, email: string, age: number){
    super(name, email, age);
    this.id = id;
  }

  payInvoice(){
    super.payInvoice()
  }
}


// let chase = new User('Chase Olsen', 'chase.olsen22@gmail.com', 22);

// chase.register();


let mike: User = new Member(1, 'Mike', 'mike@gmail.com', 40);
mike.payInvoice();
