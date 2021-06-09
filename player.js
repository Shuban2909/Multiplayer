class Player{
    constructor(){

    }
    getCount(){
        var pc=database.ref("PlayerCount");
        pc.on("value",function (data){
            gameState=data.val();
        })
    }
    updateCount(count){
       database.ref("/").update({
           PlayerCount:count
       }) 
    }
    update(Name){
        var UpdateName="Player"+PlayerCount;
        database.ref(UpdateName).set({
            Name:Name
        });
    }
}