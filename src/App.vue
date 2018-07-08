<template>
   <div >
      <br>
      <div  style="color:#5CB85C; border-style: solid; ">
         <p class="display-3 text-center" >FormBuilder</p>
      </div>
      <hr>
      <div class="row">
         <div class="col-sm-10" style="height:1050px ;overflow:auto">
            <div class="jumbotron bg-light drop-zone"  :style="Style" id="workarea">
               <keep-alive v-for="comp in complist">
                  <component  :is="comp.label" ></component>
               </keep-alive>
            </div>
         </div>
         <div class="col-sm-2">
            <table class="table">
               <thead>
                  <tr>
                     <th class="text-center">Elements</th>
                  </tr>
               </thead>
               <tbody >
                  <tr>
                     <td>
                        <button type="button" @click="addlab" class="btn btn-outline-success" style="width:100%;"  >
                        <i class="fa fa-tag"></i>
                        Label
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="adddate" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-calendar"></i>
                        Date Field
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addradiobtn" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-dot-circle-o"></i>
                        Radio button
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addselect" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-hand-pointer-o"></i>
                        Select
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addmulsel" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-list-ul"></i>
                        Multiple Select
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button"  @click="addchk" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-check-square-o"></i>
                        Checkbox
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addtex" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-square-o"></i>
                        Textbox
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addtexarea" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-text-width"></i>
                        Text area
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addfile" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-file"></i>
                        File upload
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" @click="addbutton" class="btn btn-outline-success" style="width:100%;">
                        <i class="fa fa-toggle-up"></i>
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
               <tbody>
                  <tr>
                     <td>
                        <div class="input-group">
                           <span class="input-group-btn">
                           <button class="btn btn-outline-default" type="button" @click="lesslen">
                           <i class="fa fa-minus"></i>
                           </button>
                           </span>
                           <input type="text" class="form-control" v-model="length">
                           <span class="input-group-btn">
                           <button class="btn btn-outline-default" type="button" @click="length+=100">
                           <i class="fa fa-plus"></i>
                           </button>
                           </span>
                        </div>
                     </td>
                  </tr>
               </tbody>
               <thead>
                  <tr>
                     <th class="text-center">Form Heading</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <input type="text" class="form-control" id="heading" value="Information">
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button   class="btn btn-outline-success" style="width:100%;"   data-toggle="modal" data-target="#savemodal">
                        <i class="fa fa-arrow-down"></i> Form
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type="button" class="btn btn-outline-success btn-sm" onclick="clr()">
                        <i class="fa fa-trash"></i>
                        Clear
                        </button>
                        <button type="button" class="btn btn-outline-success btn-sm" onclick="genhtml()" data-toggle="modal" data-target="#myModal">
                        <i class="fa fa-code"></i>
                        Code
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
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
             length:1000
             
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
             if(this.length-100>=100) {
               this.length-=100;
             }
             else {
               alert('Cannot be less than 100px')
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
    }
   
   
</script>
<style></style>