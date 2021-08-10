import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  badWords: string = '';
  newWord!: string;
  textArea!: string;
  borderForInput: boolean = true;
  placeholderForBadWords: string = "word  here...";
  placeholderForTextArea: string = "text here...";
  arrBadWords: Array<string> = [];
  cenzorList: Array<string> = [];
  touched: boolean = false;
  valid:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  addBadWords(): void {
    if (this.badWords.length > 0) {
      this.placeholderForBadWords = 'word here...'
      this.badWords += ', ' + this.newWord;
    }
    else if (!this.newWord) {
      this.borderForInput = false;
      this.placeholderForBadWords = "Please write the word!";
      console.log('empty');
    }
    else {
      this.placeholderForBadWords = 'word here...'
      this.borderForInput = true;
      this.badWords += this.newWord;
    }
    this.arrBadWords.push(this.newWord);
    console.log(this.arrBadWords);
    this.newWord = ''
  }
  reset(): void {
    this.newWord = '';
    this.badWords = '';
    this.borderForInput = true;
    this.arrBadWords = [];
    this.touched = false;
    this.placeholderForTextArea = 'text here...';
    this.textArea = '';
  }

  checkWithCenzor(): void {
    this.touched = false;
    if (!this.textArea) {
      this.placeholderForTextArea = 'Please write the text!';
      this.touched = true;
      this.valid = false;
    }
    else {
      this.cenzorList = this.textArea.split(' ');
      this.cenzorList.forEach((element, index, array) => {
        this.arrBadWords.forEach(bad => {
          if (element === bad) {
            console.log(element === bad);
            array[index] = '*'.repeat(element.length);
          }
        })
      })
      this.textArea = this.cenzorList.join(' ');
      this.touched = true;
      this.valid = true;
    }
  }
}

