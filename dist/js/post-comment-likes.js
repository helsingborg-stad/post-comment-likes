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

    console.log(is_comment);
    console.log(like_id);

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
        success: function(response) {
            console.log('success!');
            console.log(response);
        },
        error: function(xhr, error){
            console.debug(xhr); 
            console.debug(error);
        },
    });
  };

  return new Like();
})($);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY29tbWVudC1saWtlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9zdC1jb21tZW50LWxpa2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBvc3RDb21tZW50TGlrZXMgPSBQb3N0Q29tbWVudExpa2VzIHx8IHt9O1xuUG9zdENvbW1lbnRMaWtlcy5BamF4ID0gUG9zdENvbW1lbnRMaWtlcy5BamF4IHx8IHt9O1xuXG5Qb3N0Q29tbWVudExpa2VzLkFqYXggPSAoZnVuY3Rpb24oJCkge1xuICBmdW5jdGlvbiBMaWtlKCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBMaWtlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkKCdhLmxpa2UtYnRuJykub24oXG4gICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHRoaXMuYWpheENhbGwoZS50YXJnZXQpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICB9O1xuXG4gIExpa2UucHJvdG90eXBlLmFqYXhDYWxsID0gZnVuY3Rpb24obGlrZUJ1dHRvbikge1xuICAgIHZhciBsaWtlX2lkID0gJChsaWtlQnV0dG9uKS5kYXRhKCdsaWtlLWlkJyk7XG4gICAgdmFyIGlzX2NvbW1lbnQgPSAkKGxpa2VCdXR0b24pLmRhdGEoJ2lzLWNvbW1lbnQnKTtcbiAgICB2YXIgY291bnRlciA9ICQoJ3NwYW4ubGlrZS1jb3VudCcsIGxpa2VCdXR0b24pO1xuICAgIHZhciBidXR0b24gPSAkKGxpa2VCdXR0b24pO1xuXG4gICAgY29uc29sZS5sb2coaXNfY29tbWVudCk7XG4gICAgY29uc29sZS5sb2cobGlrZV9pZCk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGxpa2VCdXR0b25EYXRhLmFqYXhfdXJsLFxuICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2xpa2VCdXR0b25BamF4JyxcbiAgICAgICAgICAgIGlzX2NvbW1lbnQ6IGlzX2NvbW1lbnQsXG4gICAgICAgICAgICBsaWtlX2lkOiBsaWtlX2lkLFxuICAgICAgICAgICAgbm9uY2U6IGxpa2VCdXR0b25EYXRhLm5vbmNlXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxpa2VzID0gY291bnRlci5odG1sKCk7XG5cbiAgICAgICAgICAgIGlmIChidXR0b24uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbGlrZXMtLTtcbiAgICAgICAgICAgICAgICBidXR0b24udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWtlcysrO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvdW50ZXIuaHRtbChsaWtlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyEnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyh4aHIpOyBcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoZXJyb3IpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBuZXcgTGlrZSgpO1xufSkoJCk7Il19
