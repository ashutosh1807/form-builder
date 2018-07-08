<template>
   <div class="lab draggable" v-if="vis" style="position:absolute">
      <button type="button"  @click="sho"   style="font-size: 10px; padding: 0; border: none; background: none;">
      <i class="fa fa-pencil"></i>
      </button>
      <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
      <span>&times;</span>
      </button>
      <br>
      <span class="innerlab">
      <span :style="Style" class="label label-default">{{textfield}}</span>
      </span>
      <b-modal title="Edit Label"  header-bg-variant="success"  header-text-variant="light"  ref="inp" >
            <div class="modal-content">
               <div class="modal-body">
                  <div class="form-group row">
                     <label class="col-sm-4 " for="input">Text:</label>
                     <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="textfield">
                     </div>
                  </div>
                  <br>
                  <br>
                  <div class="form-group row">
                    <label class="col-sm-4 ">Text-size:</label>
                    <div class="col-sm-8">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="textsize--">
                                          <i class="fa fa-minus"></i>
                                </button>
                            </span>
                            <input type="text" class="form-control text-center" v-model="textsize">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="textsize++">
                                          <i class="fa fa-plus"></i>

                                </button>
                            </span>
                        </div>
                    </div>
                  </div>
                  <br>
                  <br>
                  <div class="form-group row">
                     <label class="col-sm-4 ">Color:</label>
                     <div class="col-sm-8">
                        <input type="color" class="form-control" v-model="color">
                     </div>
                  </div>
                  <br>
                  <br>
                  <div align="center">
                     <button type="button" class="butn" @click="textbold" :class="{ pressed: b }">
                        <i class="fa fa-bold"></i>
                     </button>
                     <button type="button" class="butn" @click="textitalic" :class="{ pressed: i }">
                        <i class="fa fa-italic"></i>
                     </button>
                     <button type="button" class="butn" @click="textunderline" :class="{ pressed: u }">
                        <i class="fa fa-underline"></i>
                     </button>
                  </div>
            
               </div>
               </div>
      </b-modal>
   </div>
</template>
<script>
   export default {
       data: function() {
           return {
               textfield: 'innerhtml',
               textsize: 12,
               color: '#000000',
               vis: true,
               b: false,
               bo: 'normal',
               i: false,
               it: '',
               u: '',
               un: ''
   
           }
   
       },
       computed: {
           Style: function() {
               return {
                   fontSize: this.textsize + "px",
                   color: this.color,
                   fontWeight: this.bo,
                   fontStyle: this.it,
                   textDecoration: this.un
   
               }
           }
       },
       watch: {
                textsize: function (val) {
                    if(val<12){ 
                        alert('Cannot be less than 12px');
                    this.textsize=12;}
                }
           },
       methods: {
           sho(){
                this.$refs.inp.show();
            },
           textbold() {
                   if (!this.b) {
                       this.b = true;
                       this.bo = 'bold';
   
                   } else {
                       this.b = false;
                       this.bo = 'normal'
                   }
   
               },
               textitalic() {
                   if (!this.i) {
                       this.i = true;
                       this.it = 'italic';
   
                   } else {
                       this.i = false;
                       this.it = 'normal'
                   }
   
               },
               textunderline() {
                   if (!this.u) {
                       this.u = true;
                       this.un = 'underline';
   
                   } else {
                       this.u = false;
                       this.un = ''
                   }
   
               }
   
       },
        mounted: function () {
                this.$nextTick(function () {
                    $('.draggable').draggable({
                        containment: "parent",
                        start  : function(event, ui){
                         $(ui.helper).addClass("ui-helper");
                }});
                })
            }
   
   }
</script>