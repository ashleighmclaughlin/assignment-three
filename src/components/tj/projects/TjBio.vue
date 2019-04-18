<template>
    <div>
        <div class='container' v-if='userdata.user'>
            <img class='user-icon' :src='userdata.user.images["115"]'>
            <h1>{{ userdata.user.display_name }}</h1>
            <p>{{ userdata.user.occupation }}</p>
            <a :href='userdata.user.url'>
                <p class='website'>{{ userdata.user.url }}</p>
            </a>
            <div class='location'>
                <i class='icon fas fa-map-marker-alt'></i>
                <span>{{ userdata.user.city }}, </span>
                <span>{{ userdata.user.country }}</span>
            </div>
    
            <TjProjectModal />
    
            <div class='row stats' v-if='userdata.user'>
                <div class='col-sm' v-if='userdata.user'>
                    <p>Followers</p>
                    <h5>{{ userdata.user.stats.followers }}</h5>
                </div>
                <div class='col-sm'>
                    <p>Following</p>
                    <h5>{{ userdata.user.stats.following }}</h5>
                </div>
                <div class='col-sm'>
                    <p>Views</p>
                    <h5>{{ userdata.user.stats.views }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TjProjectModal from './TjProjectModal';
    
    export default {
        name: 'TjBio',
        components: {
            TjProjectModal
        },
        props: ['userdata']
    };
</script>

<style scoped>
    .landing {
        background-image: url('/../../../assets/tj_img/apple-business-click-392018');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 25vh;
    }
    /*
    * https://imgur.com/a/5nDMmmB  Link to Image
    */

    .container {
        margin-top: 70px;
    }
    
    .user-icon {
        border-radius: 100px;
    }
    
    .stats div {
        padding: 8px;
    }
    
    .stats p {
        margin-bottom: 0;
    }
    
    .icon {
        padding-right: 5px;
    }
</style>