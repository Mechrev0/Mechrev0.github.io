const getPublicationInfo = (types) => {
    //static/miuiplus.webp
    const pub_list = [
        // {
        //     author: "",
        //     title: '',
        //     venues: '',
        //     abbr: '',
        //     ccf: 'CCF-B',
        //     type: '',
        //     pdf: '',
        //     code: '',
        //     page: '',
        //     slide: '',
        //     comment: ''
        // },
    ]
    if (types == "all"){
        return pub_list
    }
    let new_pub_list = []
    for (const item of pub_list){
        if(item.type == types){
            new_pub_list.push(item)
        }
    }
    
    return new_pub_list
}

export default getPublicationInfo;