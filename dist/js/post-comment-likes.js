var PostCommentLikes = {};

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
    var counter = $('span.like-count', likeButton);
    var button = $(likeButton);

    $.ajax({
        url: likeButtonData.ajax_url,
        type: 'post',
        data: {
            action: 'ajaxLikeMethod',
            like_id: like_id,
            nonce: likeButtonData.nonce,
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
    });
  };

  return new Like();
})($);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY29tbWVudC1saWtlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBvc3QtY29tbWVudC1saWtlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQb3N0Q29tbWVudExpa2VzID0ge307XG5cbnZhciBQb3N0Q29tbWVudExpa2VzID0gUG9zdENvbW1lbnRMaWtlcyB8fCB7fTtcblBvc3RDb21tZW50TGlrZXMuQWpheCA9IFBvc3RDb21tZW50TGlrZXMuQWpheCB8fCB7fTtcblxuUG9zdENvbW1lbnRMaWtlcy5BamF4ID0gKGZ1bmN0aW9uKCQpIHtcbiAgZnVuY3Rpb24gTGlrZSgpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgTGlrZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJCgnYS5saWtlLWJ0bicpLm9uKFxuICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB0aGlzLmFqYXhDYWxsKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgfTtcblxuICBMaWtlLnByb3RvdHlwZS5hamF4Q2FsbCA9IGZ1bmN0aW9uKGxpa2VCdXR0b24pIHtcbiAgICB2YXIgbGlrZV9pZCA9ICQobGlrZUJ1dHRvbikuZGF0YSgnbGlrZS1pZCcpO1xuICAgIHZhciBjb3VudGVyID0gJCgnc3Bhbi5saWtlLWNvdW50JywgbGlrZUJ1dHRvbik7XG4gICAgdmFyIGJ1dHRvbiA9ICQobGlrZUJ1dHRvbik7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGxpa2VCdXR0b25EYXRhLmFqYXhfdXJsLFxuICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhMaWtlTWV0aG9kJyxcbiAgICAgICAgICAgIGxpa2VfaWQ6IGxpa2VfaWQsXG4gICAgICAgICAgICBub25jZTogbGlrZUJ1dHRvbkRhdGEubm9uY2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxpa2VzID0gY291bnRlci5odG1sKCk7XG5cbiAgICAgICAgICAgIGlmIChidXR0b24uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbGlrZXMtLTtcbiAgICAgICAgICAgICAgICBidXR0b24udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWtlcysrO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvdW50ZXIuaHRtbChsaWtlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7fSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IExpa2UoKTtcbn0pKCQpOyJdfQ==
