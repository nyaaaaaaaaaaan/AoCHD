<div class="form-container">

    <form id="edit" method="post" action="adminlist">
        <fieldset>
            <table class="table-center">
            
                <tr>
                    <td><label>ID： </label><input  class="text-right" type="text" name="search_admin_id"  size="10"></td>
                    <td><label>管理者名: </label><input type="text" name="search_admin_name" size="10"></td>
        			<td><label>Login</label>
            <select name="search_login">
                <option value="2">指定なし</option>
                <option value="1">ログイン中</option>
                <option value="0">ログアウト</option>
            </select>
        </td>
                    <td><label>状態: </label>
            <select name="search_status">
                <option value="2">指定なし</option>	
                <option value="1">登録</option>
                <option value="0">退会</option>
                        </select>
                    </td>
                    <td>
            <input id="search_submit" type="submit" value="検索">
            <input id="search_reset" type="reset" value="リセット"></td>
                </tr>
            </table>
        </fieldset>
    </form>

</div>