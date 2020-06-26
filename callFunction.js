
window.callFunction = {
    test: function (json) {

        var obj = JSON.parse(json);
        var url = obj.url;
        var token = obj.token;

        var success_data;
        $.ajax(
            {
                url: url,
                type: 'get',
                async : false,
                headers: {
                    "X-Authenticate-Token": token
                },
                success: function (output) {
                    success_data = output;
                }
            }
        )

        return JSON.stringify(success_data);
    }
};



