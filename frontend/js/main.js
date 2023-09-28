const { createApp } = Vue;

createApp({
  data() {
    return {
      disc: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost/php-dischi-json/backend/server.php")
      .then((response) => {
        const apiDisc = response.data.map((disc) => {
          console.log(disc);
          const { title, genre, author, poster, year } = disc;
          return { title, genre, author, poster, year };
        });
        this.disc = apiDisc;
      });
  },
}).mount("#app");
