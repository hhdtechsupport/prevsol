<?php
$databases['default']['default'] = array (
  'database' => 'drupal8_preventionsolutions',
  'username' => 'root',
  'password' => '',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);
$settings['file_private_path'] = 'c:/wamp64/private';
$config['system.file']['path']['temporary'] = 'c:/wamp64/tmp';

ini_set('memory_limit', '512M');
ini_set('max_input_nesting_level', 400);

# Disable Views caching.
$conf['views_skip_cache'] = 1;
$conf['views_ui_show_master_display'] = 0;

# Enable Reroute_Email.
$conf['reroute_email_enable'] = 1;

# Disable CSS and JS aggregation..
$conf['preprocess_css'] = 0;
$conf['preprocess_js'] = 0;

$update_free_access = TRUE;
