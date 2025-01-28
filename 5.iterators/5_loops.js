const mycoding=[
    {
        name: "JavaScript",
        type: "Frontend",
        level: "Advanced"
    },
    {
        name: "Node.js",
        type: "Backend",
        level: "Advanced"
    },
    {
        name: "React",
        type: "Frontend",
        level: "Advanced"
    },
    {
        name: "Express",
        type: "Backend",
        level: "Advanced"
    },
    {
        name: "MongoDB",
        type: "Database",
        level: "Advanced"
    }
]

mycoding.forEach((item) => {
    console.log(`Language name is ${item.name} and type is ${item.type}`);
})