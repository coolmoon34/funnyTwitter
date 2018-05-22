const defaultColumn = {
    default: "tweets1",
}
const columns = {
    init: function() {
        $(`#tweets1,#tweets2,#tweets3,#tweets4`).on('click', function() {
            var columnID = $(this).attr('id');
            defaultColumn.default = columnID
        })
    }
}