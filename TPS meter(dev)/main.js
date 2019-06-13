/*
NIDE BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: script.js

var ChatColor = ModAPI.requireGlobal("ChatColor");
var currentColor = ChatColor.GREEN;
var tps = 0;
var lasttime = -1
var message;
__config__.access;
Callback.addCallback("tick", function(){
    
    var t = java.lang.System.currentTimeMillis();
    if(World.getThreadTime()%20 == 0){
        if(lasttime != -1){
            tps = 1000 / (t - lasttime) * 20;
            message = ( Math.round(tps * 10) / 10);
        }
        lasttime = t;
    }
    if(message<10){
        currentColor = ChatColor.RED;
    }else if(message<15){
        currentColor = ChatColor.YELLOW;
    }
    Game.tipMessage(currentColor+"TPS is: "+message);
});