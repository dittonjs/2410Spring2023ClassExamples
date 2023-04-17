class State {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  setValue(newValue) {
    this.value = newValue;
    this.notify();
    // notify our subscribers
  }

  getValue() {
    return this.value;
  }

  notify() {
    this.subscribers.forEach(sub => sub(this.value))
  }
}


class ListState {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
    this.onItemAddedCallbacks = [];
    this.onItemRemovedCallbacks = [];
    this.onItemChangedCallbacks = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  push(item) {
    this.value.push(item);
    this.notify();
    this.notifyItemAdded(item, this.value.length - 1);
  }

  setValue(newValue) {
    this.value = newValue;
    this.notify();
  }

  getValue() {
    return this.value;
  }

  notify() {
    this.subscribers.forEach(sub => sub(this.value))
  }

  notifyItemAdded(item, index) {
    this.onItemAddedCallbacks.forEach(sub => sub(item, index))
  }
}