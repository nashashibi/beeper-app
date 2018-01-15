<template>
  <div id="auth">
    <div class="container">
      <div class="row ">
        <div class="col-md-4 col-md-offset-4 authForm">
          <h2 class="text-center">Beeper</h2>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'auth'
  }
</script>

<style>
  #auth {
    align-items: center;
    display: flex;
    height: 100%;
  }
  .authForm {
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
  }
</style>
