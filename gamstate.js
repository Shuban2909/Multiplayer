class GameState{
    constructor(){

    }
    getState(){
        var gs=database.ref("gameState");
        gs.on("value",function (data){
            gameState=data.val();
        })
        

     }
    start(){
      if (gameState==0){
          Player=new Player();
          Player.getCount();
          form=new Form();
          form.display();
          }
    }
}
