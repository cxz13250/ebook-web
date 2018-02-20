<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="assets/img/two_cat.jpg" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>{{user.name}}</p>
                <!-- Status -->
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>

        <!-- search form (Optional) -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                        </button>
                    </span>
            </div>
        </form>

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">HEADER</li>
            <!-- Optionally, you can add icons to the links -->
            <!--<li class="active"><a href="#"><i class="fa fa-th"></i> <span>Link</span></a></li>-->
            <!--<li><a href="#"><i class="fa fa-th"></i> <span>Another Link</span></a></li>-->
            <!-- <li class="treeview" v-for="menuName in menuNames" :key="menuName">
                <a href="#"><i class="fa fa-th"></i> <span>{{menuName}}</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                <li v-for="menu in menus" :key="menu.detail">
                    <a *ngIf="menu.menu==menuName" @click="navigateToUrl(menu.url)" class="pointer">
                        <i class="fa fa-circle-o"></i>{{menu.detail}}</a></li>
                </ul>
            </li> -->

            <li class="treeview">
                <a href="#"><i class="fa fa-th"></i> <span>书籍管理</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                <li><router-link to='/admin/books'><i class="fa fa-circle-o"></i>书籍列表</router-link></li>
                <li><router-link to='/admin/category/list'><i class="fa fa-circle-o"></i>书籍分类</router-link></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#"><i class="fa fa-th"></i> <span>系统日志</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                <li><router-link to='/admin/operation/list'><i class="fa fa-circle-o"></i>日志列表</router-link></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#"><i class="fa fa-th"></i> <span>用户管理</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                <li><router-link to='/admin/book/list'><i class="fa fa-circle-o"></i>用户列表</router-link></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#"><i class="fa fa-th"></i> <span>书单管理</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                <li><router-link to='/admin/order/list'><i class="fa fa-circle-o"></i>书单列表</router-link></li>
                </ul>
            </li>
        </ul>

    </section>
  </aside>
</template>

<script>
export default {
  name: 'side-bar',
  data() {
      return {
      }
  },
  created() {
      $(document).ready(() => {
      const trees = $('[data-widget="tree"]');
      trees.tree();
    });
  },
  props: {
      user: {
          type: Object,
          required: true
      }
  },
  methods: {
      navigateToUrl(url) {
          this.$router.push(url);
      }
  }
}
</script>

<style>

</style>


