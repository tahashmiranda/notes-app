const yargs = require("yargs")

yargs.command({
    command: "add",
    description: "Used to add a note",
    builder: {
        title: {
            description: "Title for the note",
            demandOption: true,
            type: String
        },
        body: {
            description: "Content of the note",
            demandOption: true,
            type: String
            
        }

    },
    handler: function(argv){
        console.log(argv["title"])
        console.log(argv["body"])
    }
}
)

yargs.command({
    command: "remove",
    description: "Remove a note",
    handler: function(){
        console.log("Remove a note")
    }

})

yargs.command({
    command: "read",
    description: "Read a note",
    handler: function(){
        console.log("Read a note")
    }

})

yargs.command({
    command: "list",
    description: "List your notes",
    handler: function(){
        console.log("Display all notes")
    }
})

yargs.parse()