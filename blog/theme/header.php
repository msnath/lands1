<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package bloggist
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<?php wp_body_open(); ?>
		<a class="skip-link screen-reader-text" href="#primary"><?php _e( 'Skip to content', 'bloggist' ); ?></a>
		<div id="page" class="site">
			<!-- Header img -->
			<?php if ( get_header_image() ) : ?>
			<div class="bottom-header-wrapper">
				<img src="<?php echo esc_url(( get_header_image()) ); ?>" alt="<?php echo esc_attr(( get_bloginfo( 'title' )) ); ?>" />
			</div>
			<?php endif; ?>
			<!-- / Header img -->

			<div id="content" class="site-content clearfix">
				<div class="content-wrap">
