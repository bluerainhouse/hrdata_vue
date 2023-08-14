<template>
  <div class="container">
    <div class="row">
      <a class="btn btn-primary">查看全部紀錄</a>
    </div>
    <div class="row">
      <table class="table table-hover" v-if="showTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">使用者ID</th>
            <th scope="col">日期</th>
            <th scope="col">收縮壓</th>
            <th scope="col">舒張壓</th>
            <th scope="col">脈搏</th>
            <th scope="col">i1</th>
            <th scope="col">i2</th>
            <th scope="col">i3</th>
            <th scope="col">詳細內容</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in responseData" :key="index">
            <td>#</td>
            <td>{{ record.login }}</td>
            <td>{{ record.recordDate }}</td>
            <td>{{ record.highBp }}</td>
            <td>{{ record.lowBp }}</td>
            <td>{{ record.heartbeats }}</td>
            <td>{{ record.i1 }}</td>
            <td>{{ record.i2 }}</td>
            <td>{{ record.i3 }}</td>
            <td>
              <router-link
                :to="`/record-detail/${record.id}`"
                class="btn btn-success"
                >詳細內容</router-link
              >
            </td>
            <td>
              <a class="btn btn-danger" @click="deleteItem(record.id)">刪除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row" v-if="!showTable">
      <h3>沒有量測記錄</h3>
    </div>
  </div>
</template>

<style>
.container {
  width: 80%;
}
</style>

<script>
import axios from "axios";

export default {
  name: "RecordView",
  data() {
    return {
      responseData: [],
      showTable: false,
    };
  },
  methods: {
    fetchData() {
      // 使用 Axios 發送 GET 請求
      axios
        .get("http://localhost:8080/api/record/allchart")
        .then((response) => {
          // 成功處理返回的數據
          this.responseData = response.data;
          this.showTable = true;
        })
        .catch((error) => {
          // 處理錯誤
          console.error(error);
        });
    },
    deleteItem(recordId) {
      axios
        .delete(`http://localhost:8080/api/record/${recordId}`)
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
