var PostCommentLikes = PostCommentLikes || {};
PostCommentLikes.Ajax = PostCommentLikes.Ajax || {};

PostCommentLikes.Ajax = (function($) {
  function Like() {
      this.init();
  }

  Like.prototype.init = function() {
      $('a.like-btn').on(
          'click',
          function(e) {
              e.stopImmediatePropagation();
              this.ajaxCall(e.target);
              return false;
          }.bind(this)
      );
  };

  Like.prototype.ajaxCall = function(likeButton) {
    var like_id = $(likeButton).data('like-id');
    var is_comment = $(likeButton).data('is-comment');
    var counter = $('span.like-count', likeButton);
    var button = $(likeButton);

    $.ajax({
        url: likeButtonData.ajax_url,
        type: 'post',
        data: {
            action: 'likeButtonAjax',
            is_comment: is_comment,
            like_id: like_id,
            nonce: likeButtonData.nonce
        },
        beforeSend: function() {
            var likes = counter.html();

            if (button.hasClass('active')) {
                likes--;
                button.toggleClass('active');
            } else {
                likes++;
                button.toggleClass('active');
            }

            counter.html(likes);
        },
        success: function(response) {},
        error: function(xhr, error){
            console.debug(xhr); 
            console.debug(error);
        },
    });
  };

  return new Like();
})($);