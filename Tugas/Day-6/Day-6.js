const{program}=require('@caporal/core')
const {Show,Add,Update,Delete,Clear, setCompleted, setUnCompleted}=require('./fileSystem')
program
.command("list", "show all todo list")

.action(({logger, args})=>{
    Show('todo.json')
})

program
.command("add", "Adding todo")
.argument("<todo>", "What u want to do... ?")

.action(({logger, args})=>{
    const {todo}=args
    Add('todo.json',todo)
})

program
.command("update", "Update todo list")
.argument("<id>", "id todo list... ?")
.argument("<todo>", "What u want to do... ?")

.action(({logger, args})=>{
    const {id,todo}=args
    Update('todo.json',id,todo)
})

program
.command("delete", "Delete todo list")
.argument("<id>", "id todo list... ?")

.action(({logger, args})=>{
    const {id}=args
    Delete('todo.json',id)
})

program
.command("clear", "clear todo list")

.action(({logger})=>{
    Clear('todo.json')
})

program
.command("done", "Did todo list")
.argument("<id>", "Id..??")
.action(({logger, args})=>{
    const {id}=args
    setCompleted('todo.json',id)
})

program
.command("undone", "Did todo list")
.argument("<id>", "Id..??")
.action(({logger, args})=>{
    const {id}=args
    setUnCompleted('todo.json',id)
})
program.run()
