<template>
  <div class="nav__component">
    <nav>
      <ul>
        <li
          class="item__link"
          :class="{ item__link__active: index === isActive }"
          v-for="(item, index) in links"
          :key="item"
          @click="handleItemActive(index)"
        >
          <router-link :to="item.link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "vMenu",
  components: {},
  data() {
    return {
      isActive: 0,
      links: [
        { icon: "", title: "Equipment", link: "/catalog" },
        { icon: "", title: "Doctors List", link: "/doctorslist" },
        { icon: "", title: "Insurances", link: "/insurances" },
        { icon: "", title: "Diagnosis", link: "/diagnosis" },
        { icon: "", title: "Settings", link: "/settings" },
      ],
    };
  },
  methods: {
    handleItemActive(index) {
      this.isActive = index;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/_variables.less";
.nav__component {
  margin-top: 30px;

  ul {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
.item__link {
  width: 100%;
  display: inline-block;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 10px;
  transition: background-color ease-in-out 0.2s, color ease-in-out 0.2s;

  a {
    transition: color ease-in-out 0.2s;
    padding: 8px 15px;
    display: block;
    color: @color_elem;
    text-decoration: none;
  }
  .router-link-active {
    background-color: @bg_hover_category_link;
    color: @color_beruza;
    border: 1px solid @color_beruza;
  }
}
</style>
