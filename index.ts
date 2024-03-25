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