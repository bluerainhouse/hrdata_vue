<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">進階血壓計量測分析服務</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="/">首頁</a></li>
          <li><a href="/showUserRecord">量測記錄</a></li>
          <li><a href="/graph">圖表分析</a></li>
          <li><a href="/examplegraph">圖表範例</a></li>
          <li><a href="/about">關於</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="/login"
              ><span class="glyphicon glyphicon-log-in"></span> 登入</a
            >
          </li>
          <li><a href="/logout">登出</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
.navbar {
  margin-bottom: 0;
  border-radius: 0;
}
</style>

<script></script>
