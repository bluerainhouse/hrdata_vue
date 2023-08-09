<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="(record, index) in responseData" :key="index">
        {{ record.i1 }} - {{ record.i2 }}
        <button class="btn btn-danger" @click="deleteItem(record.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecordView",
  data() {
    return {
      name: "",
      responseData: [],
    };
  },
  methods: {
    fetchData() {
      // 使用 Axios 發送 GET 請求
      axios
        .get("http://localhost:8080/allchart")
        .then((response) => {
          // 成功處理返回的數據
          this.responseData = response.data;
        })
        .catch((error) => {
          // 處理錯誤
          console.error(error);
        });
    },
    deleteItem(recordId) {
      axios
        .delete(`http://localhost:8080/${recordId}`)
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          console.log(response.data);
          this.fetchData(); // 刪除成功後刷新資料
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
