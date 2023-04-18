$(document).ready(function () {
    // Init
    $('.image-section-Xception').hide();
    $('.loaderXception').hide();
    $('#resultXception').hide();

    // Upload Preview
    function readURLXception(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreviewXception').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreviewXception').hide();
                $('#imagePreviewXception').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUploadXception").change(function () {
        $('.image-section-Xception').show();
        $('#btn-predict-Xception').show();
        $('#resultXception').text('');
        $('#resultXception').hide();
        readURLXception(this);
    });

    // Predict
    $('#btn-predict-Xception').click(function () {
        var form_data = new FormData($('#upload-file-Xception')[0]);

        // Show progress bar and set it to 0%
        $('.progress').show();
        $('.progress-bar').css('width', '0%');

        // Make prediction by calling api /predictXception
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            xhr: function() {
                // Use XMLHttpRequest to show progress bar
                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(evt) {
                    if (evt.lengthComputable) {
                        var percent = evt.loaded / evt.total * 100;
                        $('.progress-bar').css('width', percent + '%');
                    }
                }, false);
                return xhr;
            },
            success: function (data) {
                // Get and display the result
                $('.loaderXception').hide();
                $('#resultXception').fadeIn(600);
                $('#resultXception').text(' Result:  ' + data);
                console.log('Prediction Success!');
            },
            complete: function() {
                // Hide progress bar when complete
                $('.progress').hide();
            }
        });
    });
});