import bugModel from '../Models/bugModel'

export function retrieveBugs(){
let data = [];

data.push(new bugModel({
_id: 83763874,
name: "crash on load",
details:"Crashes after 3 seconds",
steps: "open app",
version:"V2.0",
assigned: "Kitrick Bell",
creator:"Rick Bell",
priority:1,
time: "10:00"
}))

data.push(new bugModel({
    _id: 83763874,
    name: "crash on load",
    details:"Crashes after 3 seconds",
    steps: "open app",
    version:"V2.0",
    assigned: "Kitrick Bell",
    creator:"Rick Bell",
    priority:3,
    time: "10:00"
    }))

    //sorts the data by priority 
let sorted = data.sort((a,b) => {return a.priority - b.priority})

return sorted
}