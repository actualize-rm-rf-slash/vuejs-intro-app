/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!!!!",
      fortunes: ["good", "bad", "okay"],
      tasks: [
        { id: 1, text: "Take out the garbage", completed: false },
        { id: 2, text: "Make the bed", completed: false },
        { id: 3, text: "Mow the lawn", completed: false }
      ],
      newTask: { id: 4, text: "", completed: false },
      newReview: { text: "", rating: "", reviewer: "" },
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread!",
          rating: 5,
          reviewer: "Burton Wax"
        },
        {
          text: "I love Vue.js, especially when I'm programming!",
          rating: 4,
          reviewer: "Emily Post"
        },
        {
          text: "Vue.js is waaaaay better than Chinese Checkers.",
          rating: 2,
          reviewer: "Angela Pearson"
        }
      ]
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      if (this.newTask.text) {
        this.tasks.push(this.newTask);
        this.newTask = { id: 4, text: "", completed: false };
      }
    },
    completeTask: function(inputTask) {
      console.log(inputTask);
      var index = this.tasks.indexOf(inputTask);
      this.tasks.splice(index, 1);
    },
    addReview: function() {
      this.reviews.push(this.newReview);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
