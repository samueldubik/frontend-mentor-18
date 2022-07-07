<template>
    <div class="flip-card relative h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] md:h-[150px] md:w-[150px] bg-red">
          <!--TOP-->
          <!--AFTER-->
          <div class="topcard overflow-hidden absolute top-0 bg-card-top w-full h-[50%] ">
            <h3 class=" text-top  top-[35%] left-[11%]  ">{{timerFormat}}</h3>
          </div>
          <!--BEFORE-->
          <div class=" topcard flipTop overflow-hidden absolute top-0 bg-card-top w-full h-[50%]">
            <h3 class=" text-top top-[35%] left-[11%]  ">{{timerFormat+1}}</h3>
          </div>

          <!--BOTTOM-->
          <!--BEFORE-->
          <div class="bottomcard overflow-hidden absolute top-[50%] bottom-card bg-desaturated w-full h-[50%] ">
            <h3 class=" text-bottom  top-[-65%] left-[11%]  ">{{timerFormat+1}}</h3>
          </div>
          <!--AFTER-->
          <div class="bottomcard flipBottom overflow-hidden absolute top-[50%] bottom-card bg-desaturated w-full h-[50%]">
            <h3 class=" text-bottom top-[-65%] left-[11%] ">{{timerFormat}}</h3>
          </div>
          

      </div>
</template>

<script>
    export default {
        props: ['number'],

        computed:{ 
            
            timerFormat(){
                if(this.number < 10)
                return '0' + this.number;

                else return this.number;
            }
        }
    }
</script>
