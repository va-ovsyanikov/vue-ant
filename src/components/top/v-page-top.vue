<template>
  <div class="page__top">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        }
    }
};
</script>


