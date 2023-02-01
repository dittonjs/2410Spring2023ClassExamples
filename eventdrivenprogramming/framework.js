const eventQueue = [];
const eventListeners = {}

function addEventListener(type, eventListener) {
  if (!eventListeners[type]) {
    eventListeners[type] = [eventListener];
  } else {
    eventListeners[type].push(eventListener);
  }
}

class Looper {
  constructor() {
    setInterval(() => {
      this.processEvent();
    }, 1);
  }

  processEvent() {
    if (eventQueue.length > 0) {
      const event = eventQueue.shift();
      if (eventListeners[event]) {
        for (const eventListener of eventListeners[event]) {
          eventListener();
        }
      }
    }
  }
}

function performEvent(event) {
  eventQueue.push(event);
}

new Looper();
