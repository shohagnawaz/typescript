// 1. interface
// 2. abstract class

// example: 1
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
};

class MusicPlayer implements MediaPlayer {
    play() {
        console.log(`Playing music .......`)
    };
    pause() {
        console.log(`Pause music .......`)
    };
    stop() {
        console.log(`stop music .......`)
    }
}
const musicPlay = new MusicPlayer()
musicPlay.play();


// example 2
abstract class A {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class B extends A {
    play() {
        console.log(`Playing music .......`)
    };
    pause() {
        console.log(`Pause music .......`)
    };
    stop() {
        console.log(`stop music .......`)
    }
}
const nawaz = new B();
nawaz.pause();

