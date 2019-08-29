const inquirer=require('inquirer')

var figlet = require('figlet')
 
figlet('Rohit Jha', function(err, data) {
    if (err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
    }
    console.log(data)
    display()
})

display=()=>{
    inquirer
.prompt([{

type:'list',
name:'resume',
choices:['about','skill','exit']

}])


.then(ans=>{
if(ans.resume==='about'){
    console.log('Name : Rohit Jha \nProfession: Full Stack Developer')
    display()
}
else if(ans.resume==='skill'){
    console.log('Javascript,NodeJS,ReactJS,React Native')
    display()
}
else if(ans.resume==='exit'){
   exit()
}



})
}
