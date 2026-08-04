import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypingService {


  typingEffect(
    words: string[],
    speed: number = 100,
    delay: number = 2000
  ): Observable<string> {


    return new Observable(observer => {


      let wordIndex = 0;

      let charIndex = 0;

      let currentWord = '';


      const timer = setInterval(() => {


        if(charIndex < words[wordIndex].length) {


          currentWord += words[wordIndex][charIndex];

          charIndex++;

          observer.next(currentWord);


        }
        else {


          setTimeout(()=>{


            charIndex = 0;

            currentWord = '';

            wordIndex++;


            if(wordIndex >= words.length){

              wordIndex = 0;

            }


          }, delay);


        }


      }, speed);


      return () => {

        clearInterval(timer);

      };


    });


  }


}