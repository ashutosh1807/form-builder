<template>
   <div class="lab draggable" v-if="vis" style="position:absolute">
      <button type="button" @click="showModal = true" style="font-size: 10px; padding: 0; border: none; background: none;">
      <span class="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
      <span>&times;</span>
      </button>
      <br>
      <span class="innerlab">
      <span :style="Style" class="label label-default">{{textfield}}</span>
      </span>
      <!-- Modal -->
      <div class="modal left fade in show" v-if="showModal" role="dialog">
         <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
               <div class="modal-header text-center" style="background-color:#5CB85C;color: #fff;">
                  <button type="button" @click="showModal = false" class="close" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
                  <h2>Edit Label</h2>
               </div>
               <div class="modal-body">
                  <div class="form-group">
                     <label class="col-sm-4 " for="input">Text:</label>
                     <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="textfield">
                     </div>
                  </div>
                  <br>
                  <br>
                  <div class="form-group">
                    <label class="col-sm-4 ">Text-size:</label>
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
                     <label class="col-sm-4 ">Color:</label>
                     <div class="col-sm-8">
                        <input type="color" class="form-control" v-model="color">
                     </div>
                  </div>
                  <br>
                  <br>
                  <div align="center">
                     <button type="button" class="butn" @click="textbold" :class="{ pressed: b }">
                     <span class="glyphicon glyphicon-bold"></span>
                     </button>
                     <button type="button" class="butn" @click="textitalic" :class="{ pressed: i }">
                     <span class="glyphicon glyphicon-italic"></span>
                     </button>
                     <button type="buuton" class="butn" @click="textunderline" :class="{ pressed: u }">
                     <span class="glyphicon glyphicon-text-color"></span>
                     </button>
                  </div>
                  <!---
                     <div class="form-group">
                         <label class="col-sm-4">Font</label>
                         <div class="col-sm-8">
                             <select>
                                 <template v-for="font in fontstyles">
                                     <option><span :style="fontFamily:a;">{{font}}</span></option>
                                     <br>
                                 </template>
                             </select>
                         </div>
                     </div>-->
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import {
       Draggable
   }
   from 'draggable-vue-directive'
   export default {
       directives: {
           Draggable,
       },
       data: function() {
           return {
               showModal: false,
               textfield: 'innerhtml',
               a: 'Antiqua',
               textsize: 12,
               color: '#000000',
               vis: true,
               fontstyles: ['Agency FB', 'Antiqua', 'Architect', 'Arial', 'BankFuturistic', 'BankGothic',
                   'Blackletter', 'Blagovest', 'Calibri', 'Comic Sans MS', 'Courier', 'Cursive', 'Decorative',
                   'Fantasy', 'Fraktur', 'Frosty', 'Garamond', 'Georgia', 'Helvetica', 'Impact', 'Minion',
                   'Modern', 'Monospace', 'Open Sans', 'Palatino', 'Roman', 'Sans-serif', 'Serif', 'Script', 'Swiss', 'Times',
                   'Times New Roman', 'Tw Cen MT', 'Verdana'
               ],
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
       methods: {
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