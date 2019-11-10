let data ={
    playlist:[
        {
            name:"Jony J", 
            song:"住你耳朵裡"
        },
        {
            name:"Jony J", 
            song:"fantasy"
        },
        {
            name:"Gai", 
            song:"苦行僧"
        },
        {
            name:"王閃火", 
            song:"LA in the snow"
        },
        {
            name:"王閃火", 
            song:"目不轉睛"
        },
        {
            name:"李佳隆", 
            song:"太空杯"
        },
        {
            name:"大傻", 
            song:"野家拳"
        },
        {
            name:"大傻", 
            song:"忙先生"
        },
    ],
    input:{
        singer:"全部",
        name:"",
    }
}


let app = new Vue({
    el:"#app",
    data:data,
    computed:{
        whosSong(){
            if(this.input.singer !== "全部"){
                return this.playlist.filter(item =>{
                    return item.name == this.input.singer
                })
            }
            else{
                return this.playlist;
            }
        },
        anotherFilter(){
            if(this.input.name){
                return this.whosSong.filter(item => {
                    let content = item.song.toLowerCase();
                    let keyWords = this.input.name.toLowerCase();
                    return content.indexOf(keyWords) != -1
                })
            }else{
                return this.whosSong
            }
        }
    }
})