<template>
    <div>
        <div class='container' v-if='userdata.user'>
                <img class='user-icon' :src='userdata.user.images["115"]'>
            <h1>{{ userdata.user.display_name }}</h1>
            <p>{{ userdata.user.occupation }}</p>
            <a v-bind:href='userdata.user.website'>
            <p class='website'>{{ userdata.user.website }}</p>
            </a>
            <div class='location'>
                <i class='icon fas fa-map-marker-alt'></i>
                <span>{{ userdata.user.city }}, </span>
                <span>{{ userdata.user.country }}</span>
            </div>

            <TjProjectModal />

            <div class='row stats'>
                <div class='col-sm'>
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
    .router-link-active {
        font-weight: 400;
    }
    
    .container {
        margin-top: 70px;
    }
    
    .user-icon {
        border-radius: 100px;
    }
    
    .img-border img {
        border-radius: 10px;
    }
    
    .website {
        text-decoration: underline;
    }
    
    .stats div {
        padding: 0;
    }

    .stats p {
        margin-bottom: 0;
    }

/*
* https://imgur.com/a/5nDMmmB  Link to Image
* 
*/
    
    .landing {
        background-image: url('/../../../assets/tj_img/apple-business-click-392018');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 25vh;
    }
    
    .logo-img {
        height: 60px;
    }
    
    .navbar {
        background-color: transparent !important;
        color: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 2;
    }
    .icon {
        padding-right: 5px;
    }

</style>