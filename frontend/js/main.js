const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
      hidden: "hidden",
      hiddenDisk: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/server.php")
      .then((response) => {
        const apiDisk = response.data.map((disk) => {
          const { title, genre, author, poster, year } = disk;
          return { title, genre, author, poster, year };
        });
        this.disks = apiDisk;
      });
  },
  methods: {
    openDisk(index) {
      axios
        .get("http://localhost/php-dischi-json/backend/server.php")
        .then((response) => {
          console.log(response.data[index]);
          this.hiddenDisk = response.data[index];
        });
      this.hidden = "absolute";
    },
  },
}).mount("#app");
