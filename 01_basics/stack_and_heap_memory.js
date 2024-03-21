// ++++++++++++++++++++++ stack and heap memory

// Stack(primitive )
let myname = 'danielscott'
let anothername = myname
anothername = 'john'

console.log(myname);
console.log(anothername);


// Heap(Non-primitive)

let userone = {
    name: 'user@google.com',
    uid: "user@ybl"
}

let userTwo = userone

userTwo.email = "dani.com"
console.log(userTwo.email);
console.log(userone.email);

