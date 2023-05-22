import  {faker}  from "@faker-js/faker";
import  lodash  from "lodash";
const users = []
const createUsers = (count) => {
    for (let i = 0; i < count; i++) {
        const userName = faker.person.firstName();
        const email = faker.internet.email();
        const userPhone = faker.phone.imei();
        const user = {
            userName,
            email,
            userPhone
        }
        users.push(user)
    }
    return users
}
const fakeUsers = createUsers(10)
const sortedUsers = lodash.sortBy(fakeUsers, "userName")
console.log(fakeUsers);
console.log(sortedUsers);