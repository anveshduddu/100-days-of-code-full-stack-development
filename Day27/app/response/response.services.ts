export class responseservice{
    feedback=[];
    putData(obj){

        this.feedback.push(obj);

    }
    getData(){
        return this.feedback;
    }
}