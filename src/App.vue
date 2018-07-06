<template>
   <div>
      <div class="row" style="color:#5CB85C;  ">
         <div class="page-header text-center " >
            <h1 style="font-size: 55px;"><strong>FormBuilder</strong></h1>
         </div>
      </div>
      <div class="row">
         <div class="col-sm-10" style="height:650px ;overflow:auto">
            <div class="jumbotron bg-light drop-zone"  :style="Style" id="workarea">
                <keep-alive v-for="comp in complist">
                  <component  :is="comp.label" ></component>
               </keep-alive>
               
            </div>
         </div>
         <div class="col-sm-2">
            <table class="table table-hover">
               <thead>
                  <tr>
                     <th class="text-center">Elements</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <button type="button" @click="addlab" class="btn btn-success labelbutton" style="width:100%;"  >
                        <span class="glyphicon glyphicon-tag"></span>
                        Label
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="adddate" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-calendar"></span>
                        Date Field
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addradiobtn" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-record"></span>
                        Radio button
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addselect" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-hand-up"></span>
                        Select
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addmulsel" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-option-vertical"></span>
                        Multiple Select
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button"  @click="addchk" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-check"></span>
                        Checkbox
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addtex" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-edit"></span>
                        Textbox
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addtexarea" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-text-size"></span>
                        Text area
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addfile" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-folder-open"></span>
                        File upload
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addbutton" class="btn btn-success" style="width:100%;">
                        <span class="glyphicon glyphicon-collapse-up"></span>
                        Button
                        </button>
                     </td>
                  </tr>
               </tbody>
               <thead>
                  <tr>
                     <th class="text-center">Form size</th>
                  </tr>
               </thead>
               <tr>
                  <td>
                     <div class="input-group">
                       <span class="input-group-btn">
                          <button class="btn btn-default" type="button" @click="lesslen">
                          <span class="glyphicon glyphicon-minus"></span>
                          </button>
                        </span>
                        <input type="text" class="form-control" v-model="length">
                        <span class="input-group-btn">
                          <button class="btn btn-default" type="button" @click="length+=100">
                          <span class="glyphicon glyphicon-plus"></span>
                          </button>
                        </span>
                     </div>
                  </td>
               </tr>
            </table>
            <button type="button" class="btn btn-success btn-md" onclick="clr()">
             <span class="glyphicon glyphicon-trash"></span>
             Clear
             </button>
             <button type="button" class="btn btn-success btn-md" onclick="genhtml()" data-toggle="modal" data-target="#myModal">
             <span class="glyphicon glyphicon-console"></span>
             Code
             </button>
         </div>
      </div>
   </div>
</template>
<script>
   import radiobtn from './components/radiobutton.vue'
   import lab from './components/label.vue'
   import dat from './components/date.vue'
   import sel from './components/select.vue'
   import fil from './components/file.vue'
   import tex from './components/textbox.vue'
   import chk from './components/checkbox.vue'
   import mulsel from './components/multiselect.vue'
   import texarea from './components/textarea.vue'
   import but from './components/button.vue'
    
       export default{
        
         data:function(){
           return{
             complist:[],
             length:600
             
           }
         },
         components:{
           radiobtn:radiobtn,
           lab:lab,
           dat:dat,
           sel:sel,
           fil:fil,
           tex:tex,
           chk:chk,
           mulsel:mulsel,
           texarea:texarea,
           but:but,
           
         },
         computed:{
           Style(){
             return{
               height: this.length + "px"
              }
            }

         },
         methods:{
           lesslen(){
             if(this.length-100>=600) {
               this.length-=100;
             }
             else {
               alert('Cannot be less than 600px')
             }

           },
           addradiobtn:function(){
             this.complist.push({label:'radiobtn'});
           },
           addlab:function(){
             this.complist.push({label:'lab'});
           },
           adddate:function(){
             this.complist.push({label:'dat'});
           },
           addselect:function(){
             this.complist.push({label:'sel'});
           },
           addfile:function(){
             this.complist.push({label:'fil'});
           },
           addtex:function(){
             this.complist.push({label:'tex'});
           },
           addchk:function(){
             this.complist.push({label:'chk'});
           },
           addmulsel:function(){
             this.complist.push({label:'mulsel'});
           },
           addtexarea:function(){
             this.complist.push({label:'texarea'});
           },
           addbutton:function(){
             this.complist.push({label:'but'});
           }
         },
         mounted: function () {
                this.$nextTick(function () {
                    $(".labelbutton").draggable({
                      cancel: false,
                      helper: "clone",
                      containment: "#workarea"});
                    $("#workarea").droppable({
                      drop: function(event, ui) {
                       
                      }
                    });
                            });

         
       }}
   
   
</script>
<style>
</style>
</style>
