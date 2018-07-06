<template>
    <div class="tex draggable" v-if="vis" style="position:absolute;">
        <button type="button" @click="showModal = true" style="font-size: 10px; padding: 0; border: none; background: none;" data-toggle="modal" data-target=".textModal">
            <span class="glyphicon glyphicon-pencil"></span>
        </button>
        <button type="button" style="font-size: 16px; padding: 0; border: none; background: none;" @click="vis=!vis">
            <span>&times;</span>
        </button>
        <br>
        <span class="innertex">
             <input type="text" class="form-control"  :name="name" :style="Style">
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
                         <h2>Edit text-box</h2>

                    </div>
                    <div class="modal-body" >
                        <div class="form-group">
                            <label class="col-sm-4 ">Name:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="name">
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="form-group">
                            <label class="col-sm-4 ">height:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="length">
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="form-group">
                            <label class="col-sm-4 ">Width:</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="width">
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