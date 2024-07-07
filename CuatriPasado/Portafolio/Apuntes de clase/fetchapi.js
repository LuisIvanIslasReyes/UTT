var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

var responseData = fetch(url).then(response => response.json());

responseData.then(({items, has_more, quota_max, quota_remaining}) => {
    for ({title, owner, is_answered,} of items){
        console.log("Q: "+ title + "..  is_answered: "+  is_answered)
    }
})
