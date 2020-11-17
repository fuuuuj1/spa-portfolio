<template>
  <div id="app">

    <header id="header">


    <!-- サブメニュー -->
    <v-navigation-drawer app   v-model="drawer" clipped>
      <v-container>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-4">
              Page lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>



        <v-list dense nav>

          <v-list-group
          v-for="page_list in page_lists"
          :key="page_list.name"
          :prepend-icon="page_list.icon"
          no-action
          :append-icon="page_list.lists ? undefined : ' ' ">

            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ page_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="list in page_list.lists" :key="list.name" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>

        </v-list>

      </v-container>
    </v-navigation-drawer>
    <!-- サブメニュー終了 -->

    <!-- ナビバー -->
    <v-app-bar
      app
      clipped-left
      absolute
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>my-portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/works">Works</v-btn>
        <v-btn text to="/skill">Skill</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- ナビバー終了 -->

    </header>

    <v-main>
      <router-view/>
    </v-main>

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
        drawer: false,
        page_lists:[
          {
            name: 'Home',
            icon: 'mdi-home',
            link: '/',
          },
          {
            name: 'About',
            icon: 'mdi-account',
            lists:[
              {
                name:'Profile',
                link:'/about#profile',
              },
              {
                name:'Favorites',
                link:'/about#favorites',
              },
              {
                name:'Work history',
                link:'/about#history',
              },
              {
                name:'Belief',
                link:'/about#belief',
              },
              {
                name:'next step',
                link:'/about#next',
              }
            ],
          },
          {
            name: 'Works',
            icon: 'mdi-image-outline',
            lists:
            [
              {
                name:'portfolio',
                link:'/works#portfolio'
              },
              {
                name:'photo',
                link:'/works#photo'
              },
              {
                name:'article',
                link:'/works#article'
              }
            ],
          },
          {
            name: 'Skill',
            icon: 'mdi-poll',
            lists:[
              {
                name:'programming',
                link:'/skill#programming'
              },
              {
                name:'medical',
                link:'/skill#medical'
              },
              {
                name:'licence',
                link:'/skill#licence'
              }
              ],
          },
          {
            name: 'Contact',
            icon: 'mdi-comment',
            link: '/contact',
          },
        ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
