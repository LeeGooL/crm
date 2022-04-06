class Observable {
  subscribers = new Set();

  subscribe(subscriber) {
    if (!this.subscribers.has(subscriber)) {
      this.subscribers.add(subscriber);
    }

    return () => {
      if (this.subscribers.has(subscriber)) {
        this.subscribers.delete(subscriber);
      }
    };
  }

  dispatch(...data) {
    for (const subscriber of this.subscribers) {
      subscriber(...data);
    }
  }
}

export default Observable;
