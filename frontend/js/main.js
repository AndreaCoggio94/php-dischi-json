const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello there!",
    };
  },
  mounted() {
    console.log(axios);
    // axios
    //   .get("http://localhost/php-dischi-json/backend/server.php")
    //   .then((response) => {
    //     console.log(response)
    //   });
  },
}).mount("#app");
