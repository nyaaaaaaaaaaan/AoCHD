<?php /* Smarty version Smarty-3.1.13, created on 2013-08-14 13:31:09
         compiled from "/Users/Erlkonig/Documents/Workspace/ArenaofGenelogy/application/views/admin/usercreate.tpl" */ ?>
<?php /*%%SmartyHeaderCode:114112010451ec14e9594f40-18865945%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '663ebb64c66bc04f2b0d137b46dceab9af8eb49a' => 
    array (
      0 => '/Users/Erlkonig/Documents/Workspace/ArenaofGenelogy/application/views/admin/usercreate.tpl',
      1 => 1376454535,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '114112010451ec14e9594f40-18865945',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_51ec14e95bd5c9_54388881',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_51ec14e95bd5c9_54388881')) {function content_51ec14e95bd5c9_54388881($_smarty_tpl) {?><div class="form-container">

    <form id="edit" method="post" action="userinsert">
        <fieldset>
            <table>
            
                <tr>
                    <td><label>ID： </label></td>
                    <td><input type="text" readonly size="40"></td>
                </tr>
                
                <tr>
                    <td><label>ユーザー名: </label></td>
                    <td><input type="text" name="user_name" size="40"></td>
                </tr>
                
                <tr>
                    <td><label>Email: </label></td>
                    <td><input type="email" name="email" size="40"></td>
                </tr>
                
                <tr>
                    <td><label>パスワード: </label></td>
                    <td><input type="password" name="password" size="40" > </td>
                </tr>

                <tr>
                    <td><label>状態: </label></td>
                    <td><select name="status">
                            <option value="1">登録</option>
                            <option value="0">退会</option>
                        </select>
                    </td>
                </tr>
                
                <tr>
                    <td><label>メモ: </label></td>
                    <td><textarea name="memo" rows="5" cols="45" wrap="soft"></textarea></td>
                </tr>

                <tr>
                    <td>
                        <input id="submit_insert" type="submit" value="送信"><input type="reset" value="リセット"></td>
                </tr>
            </table>
        </fieldset>
    </form>

    <button id="closetb">閉じる</button>

</div>
<script "text/javascript" src="../themes/js/library/md5.js"></script>
<script "text/javascript" src="../themes/js/thickboxuse.js"></script><?php }} ?>