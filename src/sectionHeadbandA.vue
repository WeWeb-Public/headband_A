<template>
    <div class="headband_A">
        <!-- wwManager:start -->
        <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->
        
        <wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background"></wwObject>
        
        <div class="container section-padding">
            <div class="block-img-container">
                <div class="center-text">
                    <div class="text">
                        <h1>
                            <wwObject v-bind:ww-object="section.data.title"></wwObject>
                        </h1>
                        
                        <wwObject v-bind:ww-object="section.data.subtitle"></wwObject>
                        
                        <div class="button-container">
                            <wwObject class="button-wrapper" v-bind:ww-object="section.data.button"></wwObject>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "headband_A",
    props: {
        sectionCtrl: Object
    },
    data() {
        return {}
    },
    computed: {
        section() {
            return this.sectionCtrl.get();
        }
    },
    created() {
        //Initialize section data
        this.section.data = this.section.data || {}

        if (!this.section.data.background) {
            this.section.data.background = wwLib.wwObject.getDefault({ 
                type: 'ww-image',  
                data: {
                    url: 'http://cdn.wewebapp.io/public/images/weweb-wp.png'
                } 
            });
        }
        if (!this.section.data.title) {
            this.section.data.title = wwLib.wwObject.getDefault({ type: 'ww-text', data: { color: 'white' } });
        }
        if (!this.section.data.subtitle) {
            this.section.data.subtitle = wwLib.wwObject.getDefault({ type: 'ww-text', data: { color: 'white' }  });
        }
        if (!this.section.data.button) {
            this.section.data.button = wwLib.wwObject.getDefault({ type: 'ww-button' });
        }
        this.sectionCtrl.update(this.section);
    },
    methods: {}
};
</script>

<style scoped>
.headband_A {
    position: relative;
    flex-basis: 100%;
    overflow: hidden;
}

.headband_A .container {
    width: 100%;
    height: 100%;
    position: relative;
}

.headband_A .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.headband_A .center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center
}

.headband_A .block-img-container {
    height: 100%;
    width: 100%;
    position: relative;
}

.headband_A .block-title {
    margin-top: 10px;
}

.headband_A .block-text {
    margin-top: 10px;
}

.headband_A .button-container {
    text-align: center;
    margin-top: 30px;
}

.headband_A .block-title {
    margin-top: 10px;
}

.headband_A .block-text {
    margin-top: 10px;
}

.headband_A .button-container {
    text-align: center;
    margin-top: 30px;
}

.headband_A .section-padding {
    padding: 30px 15px
}

@media (min-width: 768px) {
    .headband_A .section-padding {
        padding: 50px 30px
    }
}

@media (min-width: 992px) {
    .headband_A .section-padding {
        padding: 75px 50px
    }
}
</style>
