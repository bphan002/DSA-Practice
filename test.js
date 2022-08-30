const users = [
    {id:1},
    {id:2},
    {id:3}
]

for (const {id} of users) {
//line 7 is looping through each element in the array
// since each element is an object we can destructure the obj
//  {id} = element is esentially what it is doing
    console.log(id)
}

