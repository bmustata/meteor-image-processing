import imgSteam from 'image-steam';

let streamOption = {
    "storage": {
        "driver": "s3",
        "endpoint": "s3.amazonaws.com",
        "accessKey": Meteor.settings.AWSAccessKeyId,
        "secretKey": Meteor.settings.AWSSecretAccessKey
    }
}

Meteor.startup(function () {

    console.log("render/images startup");

    var connect = new imgSteam.http.Connect(streamOption);
    Picker.middleware(connect.getHandler());

    connect.on('error', function (err) {
        console.error("ImageStream error", err);
    });
})