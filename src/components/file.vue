<template>
   <div class="fil draggable" v-if="vis" style="position:absolute;">
      <div class="row">
         <button type="button" @click="sho" style="font-size: 8px; padding: 0; border: none; background: none;" >
         <i class="fa fa-pencil"></i>
         </button>
         <button type="button" style="font-size: 14px; padding: 0px; border: none; background: none;" @click="vis=!vis">
         <span>&times;</span>
         </button>
      </div>
      <span class="innerfile">
      <input type="file" class="custom-file-input" id="customFile">
      <span class="custom-file-label" for="customFile">Choose file</span>
      </span>
      <b-modal title="Edit Choose File"  header-bg-variant="success"  header-text-variant="light"  ref="inp" >
         <div class="modal-content">
            <div class="modal-body">
               <div class="form-group row">
                  <label class="col-sm-4 ">Name:</label>
                  <div class="col-sm-8">
                     <input type="text" class="form-control" v-model="name">
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