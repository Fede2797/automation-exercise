const incorrect = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

const loginData = [
    {
      email: 'fedexample22@gmail.com',
      password: 'ThisIsAPassword123',
      credentialName: 'John Doe',
    },
    {
      email: 'fedexample20@gmail.com',
      password: 'ThisIsAPassword123',
      credentialName: 'John Doe',
    },
    {
      email: 'fedexample19@gmail.com',
      password: 'ThisIsAPassword123',
      credentialName: 'John Doe',
    },
    {
      email: 'fedexample18@gmail.com',
      password: 'ThisIsAPassword123',
      credentialName: 'John Doe',
    },
]

const incorrectLoginData = [
  {
    email: 'notemail@gmail.com',
    password: 'ThisIsAPassword123',
    incorrect: incorrect.EMAIL
  },
  {
    email: 'fedexample20@gmail.com',
    password: 'not true password',
    incorrect: incorrect.PASSWORD
  },
  {
    email: 'fedexample19@gmail.com',
    password: 'ThisIs',
    incorrect: incorrect.PASSWORD
  },
  {
    email: 'fede@gmail.com',
    password: 'ThisIsAPassword123',
    incorrect: incorrect.EMAIL
  },
  {
    email: 'fedexample17@gmail.com',
    password: 'word123',
    incorrect: incorrect.PASSWORD
  },
  {
    email: 'fedexampleail.com',
    password: 'ThisIsAPassword123',
    incorrect: incorrect.EMAIL
  },
  {
    email: 'fedexample15@gmail',
    password: 'ThisIsAPassword123',
    incorrect: incorrect.EMAIL
  },
  {
    email: 'fedexample14@gmailcom',
    password: 'ThisIsAPassword123',
    incorrect: incorrect.EMAIL
  },
  {
    email: 'fedexample13@gmail.com',
    password: 'T',
    incorrect: incorrect.PASSWORD
  }
]

const existingEmailAccounts = [
  {
    email: 'fedexample22@gmail.com',
    credentialName: 'John Doe',
  },
  {
    email: 'fedexample20@gmail.com',
    credentialName: 'John Doe',
  },
  {
    email: 'fedexample19@gmail.com',
    credentialName: 'John Doe',
  },
  {
    email: 'fedexample18@gmail.com',
    credentialName: 'John Doe',
  },
]

const contactMessageData =[
  {
      name: 'Fede',
      email: 'trial-mail@gmail.com',
      subject: 'Sujeto del mensaje',
      message: 'Este es el mensaje',
      filePath: FILE_PATH + '/mononoke.png',
  },
  {
      name: 'John',
      email: 'trial-mail100@gmail.com',
      subject: 'Message subject',
      message: 'This is the message',
      filePath: FILE_PATH + '/car.jpg',
  },
]


module.exports = {
    existingEmailAccounts,
    incorrectLoginData,
    loginData,
    contactMessageData,
}