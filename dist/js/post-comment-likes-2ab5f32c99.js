var PostCommentLikes=PostCommentLikes||{};PostCommentLikes.Ajax=PostCommentLikes.Ajax||{},PostCommentLikes.Ajax=function(t){function n(){this.init()}return n.prototype.init=function(){t("a.like-btn").on("click",function(t){return t.stopImmediatePropagation(),this.ajaxCall(t.target),!1}.bind(this))},n.prototype.ajaxCall=function(n){var e=t(n).data("like-id"),o=t(n).data("is-comment"),a=t("span.like-count",n),i=t(n);t.ajax({url:likeButtonData.ajax_url,type:"post",data:{action:"likeButtonAjax",is_comment:o,like_id:e,nonce:likeButtonData.nonce},beforeSend:function(){var t=a.html();i.hasClass("active")?(t--,i.toggleClass("active")):(t++,i.toggleClass("active")),a.html(t)},success:function(t){},error:function(t,n){console.debug(t),console.debug(n)}})},new n}($);