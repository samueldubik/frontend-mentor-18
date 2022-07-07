<template>
  <article class=" flex flex-col h-screen justify-between  ">
    <header>
      <h1 class=" text-white text-center mt-32 font-custom text-4xl uppercase ">We're Launching soon</h1>
    </header>

    <main class="grid grid-cols-4 mb-auto mt-32 lg:px-[20vw] md:px-[10vw] xs:px-[10vw]">
      
      <FlipCard class=" mx-auto" v-if="daysRendered" :number="this.days"></FlipCard>
      <FlipCard class=" mx-auto " v-if="hoursRendered" :number="this.hours"></FlipCard>
      <FlipCard class=" mx-auto " v-if="minutesRendered" :number="this.minutes"></FlipCard>
      <FlipCard class=" mx-auto " v-if="secondsRendered" :number="this.seconds"></FlipCard>
      
      <h4>DAYS</h4>
      <h4>HOURS</h4>
      <h4>MINUTES</h4>
      <h4>SECONDS</h4>


    </main>


    <footer class=" flex bg-hills bg-cover h-[15vh] justify-center items-center pl-10 pt-10">
      <img class=" " src="/src/assets/icon-facebook.svg" alt="">
      <img class=" " src="/src/assets/icon-pinterest.svg" alt="">
      <img class=" " src="/src/assets/icon-instagram.svg" alt="">
    </footer>
  </article>
</template>

<script>
import { nextTick } from 'vue';
import FlipCard from './components/FlipCard.vue'

  export default {
    components: {
      FlipCard
    },

    data(){
      return{
        days: 8,
        hours: 23,
        minutes: 55,
        seconds: 41,
        daysRendered: true,
        hoursRendered: true,
        minutesRendered: true,
        secondsRendered: true,
      }
    },

    mounted() {
      this.timer();
    },


    methods: {
        createCard(){
          this.number++;
          this.rendered = false;

          this.$nextTick().then(() => {
            this.rendered = true;
          })
        },


        timer(){
          
          var that = this;

          setInterval(function () {
          console.log(that.seconds)
          that.seconds--;
          that.secondsRendered = false;

          if(that.seconds < 0){
            that.seconds = 59;
            that.minutes--;
            that.minutesRendered = false;

          if(that.minutes < 0){
            that.minutes = 59;
            that.hours--;
            that.hoursRendered = false;

            if(that.hours < 0){
              that.hours = 23;
              that.days--;
              that.daysRendered = false;
            }
          }
          }

          
          that.$nextTick().then(() => { 
            that.secondsRendered = true;
            that.minutesRendered = true;
            that.hoursRendered = true;
            that.daysRendered = true;

           })
          },1000)


        },

        refresh() {
              

              this.secondsRendered = false;

                this.secondsRendered = true;
        },
    
        
      }

  }
</script>

