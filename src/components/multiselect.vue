<template>
   <div class="multisel draggable" v-if="vis" style="position:absolute;">
      <button type="button" @click="sho" style="font-size: 10px; padding: 0; border: none; background: none;" >
      <i class="fa fa-pencil"></i>
      </button>
      <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
      <span>&times;</span>
      </button>
      <br>
      <span class="innermultisel">
         <select class="custom-select" :style="Style" :name="name" multiple>
            <template v-for="(item,i) in items">
               <option  :value="item.value" >{{item.label}}</option>
               <br>
            </template>
         </select>
      </span>
       <b-modal title="Edit Multi-Select option"  header-bg-variant="success"  header-text-variant="light"  ref="inp" >

            <div class="modal-content">
               <div class="modal-body">
                  <div class="form-group row">
                     <label class="col-sm-4 ">Name:</label>
                     <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="name">
                     </div>
                  </div>
                  <br><br>
                  <div class="form-group row">
                     <label class="col-sm-4 ">Label size:</label>
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
                  <br><br>
                  <table class="table">
                     <thead>
                        <tr>
                           <th class="text-center">S.No</th>
                           <th class="text-center"> Label</th>
                           <th class="text-center">Value</th>
                        </tr>
                     </thead>
                     <tbody>
                        <template v-for="(item,i) in items">
                           <tr>
                              <td>{{i+1}}</td>
                              <td>
                                 <input type="text" class="form-control" v-model="item.label">
                              </td>
                              <td>
                                 <input type="text" class="form-control" v-model="item.value">
                              </td>
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
         </b-modal>
   </div>
</template>
<script>
       export default {
           data: function() {
               return {
                   name: '',
                   items: [{
                       label: 'Option 1',
                       value: ''
                   }, {
                       label: 'Option 2',
                       value: ''
                   }, {
                       label: 'Option 3',
                       value: ''
                   }],
                   vis: true,
                   textsize: 12
   
               }
   
           },
           watch: {
                textsize: function (val) {
                    if(val<12){ 
                        alert('Cannot be less than 12px');
                    this.textsize=12;}
                }
           },
            methods:{
            sho(){
                this.$refs.inp.show();
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