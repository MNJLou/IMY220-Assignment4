$(document).ready(() => {
    $("button#left").on('click', function(){
        let textMessage = $('textarea#message').val();

        if(textMessage == 'testimg git times 2'){
            return;
        }

        if(textMessage.indexOf('https://www.youtube.com') !== -1){
            const pattern = /https:\/\/www\.youtube\.com\/embed\/[\w-]+/;//regex

            const link = textMessage.match(pattern);

            $('<div></div>', {
                html: $('textarea#message').val()
            }).insertBefore('div.messages').addClass('row col-4 offset-4 mb-3')
            .append(
                $('<iframe></iframe>',{
                    width: '100%',
                    height: '315px',
                    src: link[0]
                })
            ).css('background-color', '#FFBFA0');
        }else{
            $('<div></div>', {
                html: $('textarea#message').val()
            }).insertBefore('div.messages').addClass('row col-4 offset-4 mb-3').css('background-color', '#FFBFA0');
        }
    });

    $("button#right").on('click', function(){
        let textMessage = $('textarea#message').val();

        if(textMessage == ''){
            return;
        }

        if(textMessage.indexOf('https://www.youtube.com') !== -1){
            const pattern = /https:\/\/www\.youtube\.com\/embed\/[\w-]+/;//regex

            const link = textMessage.match(pattern);

            $('<div></div>', {
                html: $('textarea#message').val()
            }).insertBefore('div.messages').addClass('row col-4 offset-4 mb-3')
            .append(
                $('<iframe></iframe>',{
                    width: '100%',
                    height: '315px',
                    src: link[0]
                })
            ).css('background-color', '#87F6FF');
        }else{
            $('<div></div>', {
                html: $('textarea#message').val()
            }).insertBefore('div.messages').addClass('row col-4 offset-4 mb-3').css('background-color', '#87F6FF');
        }
    });
});