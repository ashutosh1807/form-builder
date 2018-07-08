<template>
    <div class="texarea draggable" v-if="vis" style="position:absolute;">
        <button type="button" @click="sho" style="font-size: 10px; padding: 0; border: none; background: none;" data-toggle="modal" data-target=".textModal">
            <i class="fa fa-pencil"></i>
        </button>
        <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
            <span>&times;</span>
        </button>
        <br>
        <span class="innertexarea">
             <textarea type="text"   class="form-control" :name="name" :style="Style"></textarea>
        </span>

              <b-modal title="Edit text-area"  header-bg-variant="success"  header-text-variant="light"  ref="inp" >

                <div class="modal-content">
                    <div class="modal-body" >
                        <div class="form-group row">
                            <label class="col-sm-4 ">Name:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="name">
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="form-group row">
                            <label class="col-sm-4 ">height:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="length">
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="form-group row">
                            <label class="col-sm-4 ">Width:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="width">
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

                name: 'textarea',
                vis: true,
                width: 200,
                length: 30
            }
        },
            computed: {
                Style: function() {
                    return {
                        width: this.width + "px",
                        height: this.length + "px"
                    }
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