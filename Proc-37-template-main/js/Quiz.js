class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    //write code here to hide question elements
    Contestant.getPlayerinfo()
   
    if(allContestants!==undefined){
    var index=0
    var x=0
    var y
    var displayPosition=200
    for(var plr in allContestants){
    var correctAnswer=2

    if(correctAnswer===allContestants[plr].answer){
      fill("green")
    }
    else{
      fill("red")
    }

    textSize(25)
    text(allContestants[plr].name+":"+allContestants[plr].answer, 250, displayPosition)
    displayPosition=displayPosition+50


    }
    }
    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
