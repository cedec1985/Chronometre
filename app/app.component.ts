import { Component } from '@angular/core';
import { Timer } from './timer';
import { State } from './state';

@Component({
    selector: 'chronometre',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    private _btnPlay: string = 'Démarrer';
    private _timer: Timer = new Timer();
    private _state: State = new State();
    play() {
        this._timer.start();
        this._state.setPlay();
        this._btnPlay = 'Continuer';
    }
    stop() {
        this._timer.stop();
        this._state.setStop();
    }
    backward() {
        this._timer.reset();
        this._state.setBackward();
        this._btnPlay = 'Démarrer';
    }
}