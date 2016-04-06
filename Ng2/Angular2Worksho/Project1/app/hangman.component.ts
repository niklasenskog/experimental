import {Component, OnInit} from 'angular2/core';
import { WordService } from './word.service';

enum gameState { 
    Waiting, 
    Playing, 
    Lost, 
    Won };
    
const TotalMoves = 6;

@Component({
    selector: 'my-hangman',
    template: `
    <h3>Let's play {{title}}</h3>
	<div class="container bongo">
    <div *ngIf="currentGameState!=1">
        <button  class="btn btn-lg btn-primary btn-block" (click)="startGame()" type="submit">Play</button>
    </div>
        <div class="smallpadd">
        <span *ngFor="#letter of incorrectLetters">{{letter}} </span>
        </div>
        <input (keyup)="makeMove($event)" type="text" />

        <p>
            <span *ngFor="#ltr of currentWord">{{ltr}} </span>
        </p>
        <!-- Help me Obi Wan, Someone cut out the code.......  -->
    </div>
  `,
    styles: [
        `
        .bongo { padding:200px;}
        .smallpadd {padding:20px;}
        :disabled {background-color:#aaaaaa;}

  `],
    providers: [WordService]
})



export class HangmanComponent implements OnInit {

    public title = 'Hangman';
    validLetters: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('');
    correctLetters: Array<string>;
    incorrectLetters: Array<string>;
    currentWord: Array<string>;
    nrOfMoves: number;
    currentGameState: gameState;
    uniqueLetterCount:number;

    theAnswer: string;

    constructor(private wordService: WordService) { }

    ngOnInit() {
        this.currentGameState = gameState.Waiting;
        this.correctLetters = new Array<string>();
        this.incorrectLetters = new Array<string>();
    }

    letterCorrect(letter: string): boolean {
        return this.theAnswer.indexOf(letter) != -1;
    }
    
    hasBeenUsed(letter: string): boolean {
        return this.correctLetters.indexOf(letter) != -1 || this.incorrectLetters.indexOf(letter) != -1;
    }

    startGame() {
        this.currentGameState = gameState.Playing;
        this.nrOfMoves = TotalMoves;
        
        this.correctLetters = new Array<string>();
        this.incorrectLetters = new Array<string>();
        
        //TODO ! get word from wordservice
       // count uniqueLetters
       
       this.theAnswer = this.wordService.getUnusedWord();
       //this.correctLetters = this.findUniqueCharacters(this.theAnswer);
       
       //this.uniqueLetterCount = this.correctLetters.length;      
       this.currentWord = [];//this.theAnswer.split("");
    }
    
    findUniqueCharacters(word: string) : Array<string>{
        var unique:Array<string> = [];
        for (var index = 0; index < this.theAnswer.length; index++) {
            var letter = this.theAnswer[index];
            if(unique.indexOf(letter) == -1)
                unique.push(letter)
        }
        return unique;
    }
    
    renderCurrentWord(){
        this.currentWord = [];
        for (var index = 0; index < this.theAnswer.length; index++) {
            var letter = this.theAnswer[index];
            if(this.letterCorrect(letter))
                this.currentWord.push(letter)
            else
                this.currentWord.push("_")
        }
    }

    makeMove(event: any) {
        var letter = event.target.value;
        //player has chosen a letter. What to do?
        if(this.hasBeenUsed(letter))
            return;
            
        if (this.letterCorrect(letter))
            this.incorrectLetters.push(letter);
        else
            this.correctLetters.push(letter);

        this.renderCurrentWord();
        //And after that  
        this.validateGame();
    }

    validateGame() {
        // it aint over till its game over
       //Need some nice if statements here
    }
    

    countUniqueCharacters(s: string) {
        let countOfUniqueChars = s.length;
        for (let i = 0; i < s.length; i++) {
            if (i != s.indexOf(s[i])) {
                countOfUniqueChars--;
            }
        }
        return countOfUniqueChars;
    }
}

