<template>
   <div class="rad draggable" v-if="vis" style="position:absolute;">
      <button type="button" @click="showModal = true" style="font-size: 10px; padding: 0; border: none; background: none;" >
      <span class="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;"  @click="vis=!vis" >
      <span >&times;</span>
      </button><br>
      <span class="innerrad" >
         <span :style="Style">
            <template v-for="(item,i) in items">
               <input type="radio" :value="item.value" :name="name" :checked="i == 0">{{item.label}}  <br v-if="inline.length < 1">
            </template>
         </span>
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
                  <h2>Edit Radio-group</h2>
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
                     <label class="col-sm-4 ">Label size:</label>
                     <div class="col-sm-8">
                        <div class="input-group">
                           <span class="input-group-btn">
                           <button class="btn btn-default" type="button" @click="textsize--">
                           <span class="glyphicon glyphicon-minus"></span>
                           </button>
                           </span>
                           <input type="text" class="form-control" v-model="textsize">
                           <span class="input-group-btn">
                           <button class="btn btn-default" type="button" @click="textsize++">
                           <span class="glyphicon glyphicon-plus"></span>
                           </button>
                           </span>
                        </div>
                     </div>
                  </div>
                  <br>
                  <br>
                  <div class="form-group">
                     <label class="col-sm-4 ">Inline:</label>
                     <div class="col-sm-8">
                        <input type="checkbox" v-model="inline">
                     </div>
                  </div>
                  <br>
                  <br>
                  <table class="table">
                     <thead>
                        <tr>
                           <th class="text-center">S.No</th>
                           <th class="text-center">Label</th>
                           <th class="text-center">Value</th>
                        </tr>
                     </thead>
                     <tbody>
                        <template v-for="(item,i) in items">
                           <tr>
                              <td>{{i+1}}</td>
                              <td><input type="text" class="form-control" v-model="item.label"></td>
                              <td><input type="text" class="form-control" v-model="item.value"></td>
                           </tr>
                        </template>
                     </tbody>
                  </table>
                  <div align="center">
                     <button class="btn btn-success" @click="items.push({label:'New Option',value:''})">Add new</button>
                     <button class="btn btn-danger" @click="items.pop()">Remove</button>
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
                name:'',
                textsize: 12,
                items:[
                  {label:'Option 1',value:''},
                  {label:'Option 2',value:''},
                  {label:'Option 3',value:''}
                ],
                vis: true,
                inline:[]
               }
           },
           computed: {
           Style: function() {
               return {
                   fontSize: this.textsize + "px",
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