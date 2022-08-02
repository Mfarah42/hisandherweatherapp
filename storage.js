class Storage {
  constructor() {
    this.hiscity;
    this.hisstate;
    this.hercity;
    this.herstate;
    this.defaultHisCity = "Raleigh";
    this.defaultHisState = "NC";
    this.defaultHerCity = "Oakland";
    this.defaultHerState = "CA";
  }

  getHisLocationData() {
    if (localStorage.getItem("hisCity") === null) {
      this.hisCity = this.defaultHisCity;
    } else {
      this.hisCity = localStorage.getItem("hisCity");
    }

    if (localStorage.getItem("state") === null) {
      this.hisState = this.defaultHisState;
    } else {
      this.hisState = localStorage.getItem("hisState");
    }

    return {
      city: this.hisCity,
      state: this.hisState,
    };
  }

  getHerLocationData() {
    if (localStorage.getItem("herCity") === null) {
      this.herCity = this.defaultHerCity;
    } else {
      this.herCity = localStorage.getItem("herCity");
    }

    if (localStorage.getItem("state") === null) {
      this.herState = this.defaultHerState;
    } else {
      this.herState = localStorage.getItem("herState");
    }

    return {
      city: this.herCity,
      state: this.herState,
    };
  }

  setHisLocationData(city, state) {
    localStorage.setItem("hisCity", city);
    localStorage.setItem("hisState", state);
  }

  setHerLocationData(city, state) {
    localStorage.setItem("herCity", city);
    localStorage.setItem("herState", state);
  }
}
