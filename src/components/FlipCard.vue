<template>
    <div class="flip-card relative h-[150px] w-[150px] bg-red">
          <!--TOP-->
          <!--AFTER-->
          <div class="topcard overflow-hidden absolute top-0 bg-card-top w-full h-[50%] ">
            <h3 class=" absolute top-[35%] left-[11%] text-redDark font-custom text-8xl">{{timerFormat}}</h3>
          </div>
          <!--BEFORE-->
          <div class=" topcard flipTop overflow-hidden absolute top-0 bg-card-top w-full h-[50%]">
            <h3 class=" absolute top-[35%] left-[11%] text-redDark font-custom text-8xl">{{timerFormat+1}}</h3>
          </div>

          <!--BOTTOM-->
          <!--BEFORE-->
          <div class="bottomcard overflow-hidden absolute top-[50%] bottom-card bg-desaturated w-full h-[50%] ">
            <h3 class=" absolute top-[-65%] left-[11%] text-redDark font-custom text-8xl">{{timerFormat+1}}</h3>
          </div>
          <!--AFTER-->
          <div class="bottomcard flipBottom overflow-hidden absolute top-[50%] bottom-card bg-desaturated w-full h-[50%]">
            <h3 class=" absolute top-[-65%] left-[11%] text-redDark font-custom text-8xl">{{timerFormat}}</h3>
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
