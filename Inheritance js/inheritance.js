class  Person{
    constructor(name){
        this.name=name

    }
    speak(){
        console.log("Hadal")
    }
}

class student extends Person{
    constructor(shahaado,name){

    }
    lear(){
        console.log("learn")
    }
}
const student = new student("maxamed");