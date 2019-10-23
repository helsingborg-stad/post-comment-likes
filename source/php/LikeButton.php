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
        $this->hook('ajaxLikeMethod', true);

        add_action('the_post', array($this, 'showPostLikes'));
    }

     /**
     * Ajax method to add comment likes
     * @return boolean
     */
    public function ajaxLikeMethod()
    {
        echo '<pre>';
        print_r('hello');
        echo '</pre>';
        die();
        if (!defined('DOING_AJAX') && ! DOING_AJAX) {
            return false;
        }

        if (!wp_verify_nonce($_POST['nonce'], 'likeNonce')) {
            die('Busted!');
        }

        ignore_user_abort(true);

        return true;

        // $commentId = $_REQUEST['comment_id'];
        // $commentObj = get_comment($commentId);
        // $like = array();
        // $create = true;

        // if (is_array(get_comment_meta($commentId, '_likes', true)) == true) {
        //     $like = array_merge($like, get_comment_meta($commentId, '_likes', true));
        // }
        // if (in_array(get_current_user_id(), $like)) {
        //     $create = false;
        //     $index = array_search(get_current_user_id(), $like);
        //     unset($like[$index]);
        // } else {
        //     $like[] = get_current_user_id();
        // }

        // do_action('Municipio/comment/save_like', $commentObj, get_current_user_id(), $create);
        // update_comment_meta($commentId, '_likes', $like);

        // return true;
    }



    public function showPostLikes($post)
    {
        if (!is_admin()) {
            $post_id = $post->ID;
    
            // $post_likes = array(
            //     array(
            //         'user_name' => 'Pear Pearsson',
            //     ),
            //     array(
            //         'user_name' => 'Roxanne Cupcake',
            //     ),
            //     array(
            //         'user_name' => 'Roger Frogger',
            //     ),
            // );
            
            // update_post_meta($post_id, 'post_likes', $post_likes);
            
            $post_likes = get_post_meta($post_id, 'post_likes', true);
            $likes_count = count($post_likes);
            
            echo '<pre>';
            print_r($post_likes);
            echo '</pre>';
    
            echo \PostCommentLikes\App::blade('like-button', ['post_likes'=>$post_likes, 'likes_count'=>$likes_count, 'post_id'=>$post_id]);
        }
    }

    // public static function userLike() {
    //     if (!wp_verify_nonce($_REQUEST['nonce'], 'my_user_vote_nonce')) {
    //         exit('No naughty business please');
    //     }
    
    //     $post_likes = get_post_meta($_REQUEST['post_id'], 'post_likes');
    
    //     $currentUser = wp_get_current_user();
    
    //     echo '<pre>';
    //     print_r($currentUser);
    //     echo '</pre>';
    //     die();
    // }
    
    // public function userMustLogin() {
    //     echo 'hello!!!';
    // }


}
