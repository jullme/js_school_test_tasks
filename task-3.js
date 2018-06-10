const callConsole = (obj) => {
    console.log(`message '${JSON.stringify(obj)}'`);
};

const callConsoleDir = (obj) => {
    console.log(`secondary '${JSON.stringify(obj)}'`);
    console.dir(obj);
};

class EventModel {
    constructor(event=null, data=null) {
        this.event = event;
        this.data = data;
    }

    emit(event, data) {
        this.event = event.bind(null, data);
        this.data = data;
    }

    on(handler='click', event=null) {
        window.addEventListener(handler, (event !== null) ? event: this.event, false);
    }
}

const w = new EventModel();
console.dir(w);
const data = {title:'Title', id:10};
w.emit((obj) => { callConsole(obj) }, data);
console.dir(w);
w.on('click');
console.dir(w);
w.on('dbclick',() => { callConsoleDir({title:'title'}) });
console.dir(w);