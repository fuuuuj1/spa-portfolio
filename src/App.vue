<template>
  <v-app id="app">

    <header id="header">


    <!-- サブメニュー -->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-4">
              Page lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>


          <!-- <v-list-group
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

          </v-list-group> -->


        <v-list dense nav>

          <template v-for="page_list in page_lists">

              <v-list-item
                  v-if="!page_list.lists"
                  :to="page_list.link"
                  :key="page_list.name"
                  :append-icon="page_list.lists ? undefined : '  ' "
                  @click="menu_close"
                  >


                  <v-list-item-icon>
                    <v-icon>{{ page_list.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>

                    <v-list-item-title>
                      {{ page_list.name }}
                    </v-list-item-title>

                  </v-list-item-content>
              </v-list-item>

              <v-list-group
                  v-else
                  no-action
                  :prepend-icon="page_list.icon"
                  :key="page_list.name"
                  v-model="page_list.active">

                  <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ page_list.name }}
                        </v-list-item-title>
                      </v-list-item-content>
                  </template>

                  <v-list-item
                      v-for="list in page_list.lists"
                      :key="list.name"
                      :to="list.link">

                  <v-list-item-title>
                    {{ list.name }}
                  </v-list-item-title>

                  </v-list-item>

              </v-list-group>

          </template>

        </v-list>

      </v-container>
    </v-navigation-drawer>
    <!-- サブメニュー終了 -->

    <!-- ナビバー -->
    <v-app-bar
      app
      clipped-left
      absolute
      dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>my-portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/works">Works</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- ナビバー終了 -->

    </header>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'app',
  methods:{
          menu_close(){
            this.page_lists.forEach( page_list => page_list.active = false)
          }
        },
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
            active: false,
            link: '',
            lists:[
              {
                name:'Profile',
                link:'/about',
              },
              // {
              //   name:'Favorites',
              //   link:'/about/favorites',
              // },
              {
                name:'Work history',
                link:'/about/history',
              },
              {
                name:'Work history2',
                link:'/about/history2',
              },
              {
                name:'Belief',
                link:'/about/belief',
              },
              // {
              //   name:'next step',
              //   link:'/about#next',
              // }
            ],
          },
          {
            name: 'Works',
            icon: 'mdi-image-outline',
            active: false,
            link: '',
            lists:
            [
              {
                name:'Radiation Dosimeter',
                link:'/works'
              },
              {
                name:'BMI calculate',
                link:'/works/2'
              },
              {
                name:'my-portfolio',
                link:'/works/3'
              },
              // {
              //   name:'article',
              //   link:'/works#article'
              // }
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
  color: #2c3e50;
}
a {
    font-weight: bold;
    color: #2c3e50;
  }
</style>
