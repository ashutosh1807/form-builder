<template>
   <div class="dat draggable" v-if="vis" style="position:absolute;">
      <button type="button" @click="sho"   style="font-size: 10px; padding: 0; border: none; background: none;">
      <i class="fa fa-pencil"></i>
      </button>
      <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
      <span>&times;</span>
      </button>
      <br>
      <span class="innerdat">
      <input type="date"  :name="name" :value="value">
      </span>
      <b-modal title="Edit Date Field"  header-bg-variant="success"  header-text-variant="light"  ref="inp" >
         <div class="modal-content">
            <div class="modal-body">
               <div class="form-group row">
                  <label class="col-sm-4 ">Name:</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" v-model="name">
                  </div>
               </div>
               <br>
               <br>
               <div class="form-group row">
                  <label class="col-sm-4 ">Value:</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" v-model="value">
                  </div>
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
               name: '',
               value:'',
               vis: true
   
           }
   
       },
        methods:{
            sho(){
                this.$refs.inp.show();
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