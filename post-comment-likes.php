<?php

/**
 * Plugin Name:       Post Comment Likes
 * Plugin URI:        https://github.com/helsingborg-stad/post-comment-likes
 * Description:       Like posts and or comments.
 * Version:           1.0.0
 * Author:            Max Frederiksen
 * Author URI:        https://github.com/helsingborg-stad
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       post-comment-likes
 * Domain Path:       /languages
 */

 // Protect agains direct file access
if (! defined('WPINC')) {
    die;
}

define('POSTCOMMENTLIKES_PATH', plugin_dir_path(__FILE__));
define('POSTCOMMENTLIKES_URL', plugins_url('', __FILE__));
define('POSTCOMMENTLIKES_VIEW_PATH', POSTCOMMENTLIKES_PATH . 'views/');
define('POSTCOMMENTLIKES_CACHE_DIR', trailingslashit(wp_upload_dir()['basedir']) . 'cache/blade-cache/');

load_plugin_textdomain('post-comment-likes', false, plugin_basename(dirname(__FILE__)) . '/languages');

if (file_exists(POSTCOMMENTLIKES_PATH . 'vendor/autoload.php')) {
    require_once POSTCOMMENTLIKES_PATH . 'vendor/autoload.php';
}

if(file_exists(dirname(ABSPATH) . '/vendor/autoload.php')) {
    require_once dirname(ABSPATH) . '/vendor/autoload.php';
}

require_once POSTCOMMENTLIKES_PATH . 'source/php/Vendor/Psr4ClassLoader.php';
require_once POSTCOMMENTLIKES_PATH . 'Public.php';

// Instantiate and register the autoloader
$loader = new PostCommentLikes\Vendor\Psr4ClassLoader();
$loader->addPrefix('PostCommentLikes', POSTCOMMENTLIKES_PATH);
$loader->addPrefix('PostCommentLikes', POSTCOMMENTLIKES_PATH . 'source/php/');
$loader->register();

new \PostCommentLikes\Helper\ArrayMethods();

// function userLike()
// {
//     if (!wp_verify_nonce($_REQUEST['nonce'], 'user_like_nonce')) {
//         exit('No naughty business please');
//     }

//     $currentUser = wp_get_current_user();
//     $post_likes = get_post_meta($_REQUEST['post_id'], 'post_likes', true);

//     if (!in_array_r($currentUser->user_nicename, $post_likes)) {
//         $post_likes[] = array('user_name'=>$currentUser->user_nicename);
//         update_post_meta($_REQUEST['post_id'], 'post_likes', $post_likes);
//     }

//     if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
//         $result = json_encode($post_likes);
//         echo $result;
//     } else {
//         header("Location: ".$_SERVER["HTTP_REFERER"]);
//     }

//     die();
// }

// function userMustLogin()
// {
//     echo 'hello!!!';
// }


// Start application
new PostCommentLikes\App();
