interface IUser {
    name: string,
    lastname: string,
    age: number
}

const user: IUser = {
    name: 'Bob',
    lastname: 'Flex',
    age: 25
}
for(const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`)
}

interface Info {
    [key:string]: number;
    num: number;
}

const infoBooks: Info = {
    page: 1234,
    num: 45
}

console.log(print)