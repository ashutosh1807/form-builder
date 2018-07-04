<template>
   <div class="dat draggable" v-if="vis" style="position:absolute;">
      <button type="button" @click="showModal = true"  style="font-size: 10px; padding: 0; border: none; background: none;">
      <span class="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
      <span>&times;</span>
      </button>
      <br>
      <span class="innerdat">
      <input type="date" :name="name" :value="value">
      </span>
      <!-- Modal -->
      <div class="modal left fade in show" v-if="showModal" role="dialog">
         <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
               <div class="modal-header text-center" style="background-color:#5CB85C;color: #fff;">
                  
                  <button type="button" class="close" @click="showModal = false" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
                  <h2>Edit Date-field</h2>
               </div>
               <div class="modal-body">
                  <div class="form-group">
                     <label class="col-sm-4 ">Name:</label>
                     <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="name">
                     </div>
                  </div>
                  <br>
                  <br>
                  <div class="form-group">
                     <label class="col-sm-4 ">Value:</label>
                     <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="value">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
       export default {
           data: function() {
               return {
                   showModal: false,
                   name: '',
                   value:'',
                   vis: true
   
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