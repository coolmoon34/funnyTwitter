const query = {
	includeImages : false,
	includeVideos : false,
	contentInfo : 'funny',
}
const searchControls = {
    init: function(backend) {
        $('#picTweet').change(function(event) {
            var picCheck = $('#picTweet').prop("checked")
            picCheck ? $('#vidTweet').prop('disabled', true) : $('#vidTweet').prop('disabled', false)
            query.includeImages = picCheck
            backend.send(JSON.stringify(query))
        });
        $('#vidTweet').change(function(event) {
        	var vidCheck = $('#vidTweet').prop("checked")
            vidCheck ? $('#picTweet').prop('disabled', true) : $('#picTweet').prop('disabled', false)
        	query.includeVideos = vidCheck
        	backend.send(JSON.stringify(query))
        });
        $('#search').change(function(event) {
        	var searchBar = $('#search').val()
        	query.contentInfo = searchBar
        	backend.send(JSON.stringify(query))
        })
    }
}