class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;
    

        for(var i = 0;i <40; i++){
            logs = new log(2);
            logGroup1.add(log.spt);

            for(i=1;i<logGroup1.lenght;i++){
                if(logGroup1[i].x<0){
                    logGroup1[i].x=width
                }
            }
        }
    }
    
   
}