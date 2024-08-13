class InMemorySearch {
  // ... your code goes here
  constructor() {
    this.data = new Map();
  }
  addDocuments = (name, ...props) => {
    const namePresent = this.data.has(name);
    if (namePresent) {
      const existingList = this.data.get(name);
      this.data.set(name, [...existingList, ...props]);
    } else {
      this.data.set(name, props);
    }
  };
  search = (name, filterCondition, orderBy) => {
    const namePresent = this.data.has(name);
    if (namePresent) {
      const list = this.data.get(name);
      const filtered = list.filter(filterCondition);
      let final = filtered;
      const { key, asc } = orderBy;
      if (key) {
        let sortCondition = asc
          ? (a, b) => a[key] - b[key]
          : (a, b) => b[key] - a[key];
        final = filtered.sort(sortCondition);
      }
      return final;
    } else {
      return [];
    }
  };
}

const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: true,
  })
);
