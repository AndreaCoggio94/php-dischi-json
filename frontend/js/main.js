const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
      hidden: "hidden",
      hiddenDisk: [],
      apiUrl: "http://localhost/php-dischi-json/backend/server.php",
    };
  },
  mounted() {
    axios.get(this.apiUrl).then((response) => {
      console.log(response);
      // const apiDisk = response.data.map((disk) => {
      //   const { title, genre, author, poster, year } = disk;
      //   return { title, genre, author, poster, year };
      // });
      this.disks = response.data;
    });
  },
  methods: {
    openDisk(index) {
      const diskIndex = {
        params: {
          index,
        },
      };

      axios.get(this.apiUrl, diskIndex).then((response) => {
        console.log(response);
        // this.hiddenDisk = response.data[index];
      });
      this.hidden = "absolute";
    },
  },
}).mount("#app");
