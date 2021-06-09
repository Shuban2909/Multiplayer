class Form{
    constructor(){

    }
    display(){
        var Title=createElement("h3");
        Title.html("Car Race");
        Title.position(300,50);

        var Input=creatInput("name");
        var Button=createButton("play");
        Input.position(130,160);
        Button.position(250,200);

        Button.mousePressed(function (){
            Input.hide();
            Button.hide();

            var Name=Input.value();
            PlayerCount+=1
            Player.update(Name);
            Player.update(PlayerCount);

            var welcome=createElement("h3");
            welcome.html("Hello"+Name);
            welcome.position(130,160);
        })
    }
}