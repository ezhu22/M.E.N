users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(arr){
    for (var i = 0; i < arr.length; i++){
        output = ''
        output += arr[i].fname + ' ' + arr[i].lname + ' knows'
        for (var j = 0; j < arr[i].languages.length; j ++){
            if (j == arr[i].languages.length - 1){
                output += ' and ' + arr[i].languages[j] +'.'
            }
            else{
                output += ' ' + arr[i].languages[j] + ','
            }
        }
        console.log(output)
    }
}

userLanguages(users)
// console.log(users[0].languages[0])