<?php

namespace PostCommentLikes;

class LikeButton extends \PostCommentLikes\Helper\Ajax
{
    public function __construct()
    {
        //Data
        $this->data['ajax_url'] = admin_url('admin-ajax.php');
        $this->data['nonce'] = wp_create_nonce('likeNonce');

        //Localize
        $this->localize('likeButtonData');

        //Hook method to ajax
        $this->hook('likeButtonAjax', true);

        add_shortcode('like-button', array($this, 'renderLikeButton'));
    }

     /**
     * Ajax method to add comment likes
     * @return boolean
     */
    public function likeButtonAjax()
    {
        if (!defined('DOING_AJAX') && ! DOING_AJAX) {
            return false;
        }

        if (!wp_verify_nonce($_POST['nonce'], 'likeNonce')) {
            die('Busted!');
        }

        ignore_user_abort(true);

        $isComment = $_REQUEST['is_comment'];
        $like = array();
        $create = true;
        $currentUser = wp_get_current_user();

        if ($isComment == "true") {
            // update comment meta

            $commentId = $_REQUEST['like_id'];
            $commentObj = get_comment($commentId);
            
            //check if array exists in meta row
            if (is_array(get_comment_meta($commentId, '_likes', true)) == true) {
                $like = array_merge($like, get_comment_meta($commentId, '_likes', true));
            }

            // if user id already exists in array
            if (\PostCommentLikes\Helper\ArrayMethods::in_array_r(get_current_user_id(), $like)) {
                $create = false;
                $index = array_search(get_current_user_id(), $like);
                unset($like[$index]);
            } else {
                $newLike = array(
                    'user_name' => $currentUser->nickname,
                    'user_id' => get_current_user_id()
                );
                array_push($like, $newLike);
            }

            do_action('PostCommentLikes/save_like', $commentObj, get_current_user_id(), $create);
            update_comment_meta($commentId, '_likes', $like);

            return true;

        } else {
            // update post meta

            $postId = $_REQUEST['like_id'];

             //check if array exists in meta row
            if (is_array(get_post_meta($postId, '_likes', true)) == true) {
                $like = array_merge($like, get_post_meta($postId, '_likes', true));
            }

            // if user id already exists in array
            if (\PostCommentLikes\Helper\ArrayMethods::in_array_r(get_current_user_id(), $like)) {
                $create = false;
                $index = array_search(get_current_user_id(), $like);
                unset($like[$index]);
            } else {
                $newLike = array(
                    'user_name' => $currentUser->nickname,
                    'user_id' => get_current_user_id()
                );
                array_push($like, $newLike);
            }

            update_post_meta($postId, '_likes', $like);
            
            return true;
        }

    }

    public function renderLikeButton($atts)
    {
        if (!is_admin()) {

            if (!is_user_logged_in()) {
                return;
            }

            $postOrCommentId = $atts['post_or_comment_id'];
            $isComment = $atts['is_comment'];
            $current_user = wp_get_current_user();

            if ($isComment == "true") {
                // logic for displaying likes for this comment
                $likes = get_comment_meta($postOrCommentId, '_likes', true);

                if (empty($likes) || is_array($likes) == false) {
                    $count = 0;
                } else {
                    $count = count($likes);
                }

                $classes = array('like-btn');

                if (is_array($likes) == true && \PostCommentLikes\Helper\ArrayMethods::in_array_r(get_current_user_id(), $likes)) {
                    $classes[] = 'active';
                }

                echo \PostCommentLikes\App::blade('like-button', ['classes'=>$classes, 'count'=>$count, 'data_id'=>$postOrCommentId, 'is_comment'=>$isComment]);

                return;

            } else {
                // logic for displaying like for this post

                $likes = get_post_meta($postOrCommentId, '_likes', true);

                if (empty($likes) || is_array($likes) == false) {
                    $count = 0;
                } else {
                    $count = count($likes);
                }

                $classes = array('like-btn');

                if (is_array($likes) == true && \PostCommentLikes\Helper\ArrayMethods::in_array_r(get_current_user_id(), $likes)) {
                    $classes[] = 'active';
                }

                echo \PostCommentLikes\App::blade('like-button', ['classes'=>$classes, 'count'=>$count, 'data_id'=>$postOrCommentId, 'is_comment'=>$isComment]);

                return;
            }

        }
    }

}
