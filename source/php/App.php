<?php

namespace PostCommentLikes;

use Philo\Blade\Blade as Blade;

class App
{
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueueStyles'));
        add_action('admin_enqueue_scripts', array($this, 'enqueueScripts'));

        add_action('wp_enqueue_scripts', array($this, 'enqueueStyles'));
        add_action('wp_enqueue_scripts', array($this, 'enqueueScripts'));

        add_action('init', array($this, 'initLikeButton'));
    }

    public function initLikeButton() {
        new \PostCommentLikes\LikeButton();
    }

    /**
     * Enqueue required style
     * @return void
     */
    public function enqueueStyles()
    {
        wp_register_style('post-comment-likes-css', POSTCOMMENTLIKES_URL . '/dist/' . \PostCommentLikes\Helper\CacheBust::name('css/post-comment-likes.css'));
        wp_enqueue_style('post-comment-likes-css', POSTCOMMENTLIKES_URL . '/dist/css/post-comment-likes-css.css', false);
    }

    /**
     * Enqueue required scripts
     * @return void
     */
    public function enqueueScripts()
    {
        wp_register_script('post-comment-likes-js', POSTCOMMENTLIKES_URL . '/dist/' . \PostCommentLikes\Helper\CacheBust::name('js/post-comment-likes.js'));
        wp_enqueue_script('post-comment-likes-js', POSTCOMMENTLIKES_URL . '/dist/js/post-comment-likes-js.js', false);
    }

    /**
    * Return markup from a Blade template
    * @param  string $view View name
    * @param  array  $data View data
    * @return string       The markup
    */
    public static function blade($view, $data = array())
    {
        if (!file_exists(POSTCOMMENTLIKES_CACHE_DIR)) {
            mkdir(POSTCOMMENTLIKES_CACHE_DIR, 0777, true);
        }

        $paths = array(
            POSTCOMMENTLIKES_VIEW_PATH,
            get_template_directory() . '/views',
        );

        $blade = new Blade($paths, POSTCOMMENTLIKES_CACHE_DIR);
        return $blade->view()->make($view, $data)->render();
    }
}
