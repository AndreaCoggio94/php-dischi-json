const { createApp } = Vue;

createApp({
  data() {
    return {
      disk: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/server.php")
      .then((response) => {
        const apiDisk = response.data.map((disk) => {
          console.log(disk);
          const { title, genre, author, poster, year } = disk;
          return { title, genre, author, poster, year };
        });
        this.disk = apiDisk;
      });
  },
}).mount("#app");
