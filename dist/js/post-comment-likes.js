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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY29tbWVudC1saWtlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicG9zdC1jb21tZW50LWxpa2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBvc3RDb21tZW50TGlrZXMgPSBQb3N0Q29tbWVudExpa2VzIHx8IHt9O1xuUG9zdENvbW1lbnRMaWtlcy5BamF4ID0gUG9zdENvbW1lbnRMaWtlcy5BamF4IHx8IHt9O1xuXG5Qb3N0Q29tbWVudExpa2VzLkFqYXggPSAoZnVuY3Rpb24oJCkge1xuICBmdW5jdGlvbiBMaWtlKCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBMaWtlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkKCdhLmxpa2UtYnRuJykub24oXG4gICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHRoaXMuYWpheENhbGwoZS50YXJnZXQpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuICB9O1xuXG4gIExpa2UucHJvdG90eXBlLmFqYXhDYWxsID0gZnVuY3Rpb24obGlrZUJ1dHRvbikge1xuICAgIHZhciBsaWtlX2lkID0gJChsaWtlQnV0dG9uKS5kYXRhKCdsaWtlLWlkJyk7XG4gICAgdmFyIGlzX2NvbW1lbnQgPSAkKGxpa2VCdXR0b24pLmRhdGEoJ2lzLWNvbW1lbnQnKTtcbiAgICB2YXIgY291bnRlciA9ICQoJ3NwYW4ubGlrZS1jb3VudCcsIGxpa2VCdXR0b24pO1xuICAgIHZhciBidXR0b24gPSAkKGxpa2VCdXR0b24pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBsaWtlQnV0dG9uRGF0YS5hamF4X3VybCxcbiAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdsaWtlQnV0dG9uQWpheCcsXG4gICAgICAgICAgICBpc19jb21tZW50OiBpc19jb21tZW50LFxuICAgICAgICAgICAgbGlrZV9pZDogbGlrZV9pZCxcbiAgICAgICAgICAgIG5vbmNlOiBsaWtlQnV0dG9uRGF0YS5ub25jZVxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBsaWtlcyA9IGNvdW50ZXIuaHRtbCgpO1xuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGxpa2VzLS07XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlrZXMrKztcbiAgICAgICAgICAgICAgICBidXR0b24udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudGVyLmh0bWwobGlrZXMpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge30sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoeGhyKTsgXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGVycm9yKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV3IExpa2UoKTtcbn0pKCQpOyJdfQ==
