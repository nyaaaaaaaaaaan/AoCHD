<?php /* Smarty version Smarty-3.1.13, created on 2013-08-14 11:48:21
         compiled from "/Users/Erlkonig/Documents/Workspace/ArenaofGenelogy/themes/layout/admin-status.tpl" */ ?>
<?php /*%%SmartyHeaderCode:56541663151eb745559bbb3-33965612%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '48df2a31ccf7e400d5166d0b57a288db407b183b' => 
    array (
      0 => '/Users/Erlkonig/Documents/Workspace/ArenaofGenelogy/themes/layout/admin-status.tpl',
      1 => 1376448498,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '56541663151eb745559bbb3-33965612',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_51eb74555a56e0_50235358',
  'variables' => 
  array (
    'admin' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_51eb74555a56e0_50235358')) {function content_51eb74555a56e0_50235358($_smarty_tpl) {?><p class="loginstatus">
    <?php echo $_smarty_tpl->tpl_vars['admin']->value;?>
 としてログインしています <a href="logout">ログアウト</a>
</p>
<?php }} ?>