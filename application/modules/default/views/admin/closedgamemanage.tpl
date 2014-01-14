{include file=$header}
{include file=$changegamelog}

<h1>ゲーム一覧</h1>
{if $items|@count > 0}
    <table id="cancel">
        <thead>
            <tr>
            	<th class="datetime text-center">作成時間</th>
            	<th>状態</th>
                <th>プレイヤー1</th>
                <th>プレイヤー2</th>
                <th>プレイヤー3</th>
                <th>プレイヤー4</th>
                <th>プレイヤー5</th>
                <th>プレイヤー6</th>
                <th>プレイヤー7</th>
                <th>プレイヤー8</th>
                <th class="editable text-center">編集</th>
            </tr>
        </thead>

        <tbody>
            {foreach item=item from=$items}
                <tr>
                    <td class="text-right">{$item.created_on}</td>
                    <td>{if $item.game_status == 0}終了{elseif $item.game_status == 1}試合中{else}中止{/if}</td>
                    <td>{$item.player1_name}</td>
                    <td>{$item.player2_name}</td>
                    <td>{$item.player3_name}</td>
                    <td>{$item.player4_name}</td>
                    <td>{$item.player5_name}</td>
                    <td>{$item.player6_name}</td>
                    <td>{$item.player7_name}</td>
                    <td>{$item.player8_name}</td>
                    <td class="editable text-center"><a href="#" id="admin_report" name="{$item.gamelog_id}"><img src="../themes/images/edit.png" alt="edit"></a></td>
                </tr>
            {/foreach}
        </tbody>
    </table>
    
    {* pagination links *}
    <div class="text-center">
		{$pages.firstItemNumber} to {$pages.lastItemNumber} of {$pages.totalItemCount}<br />
		<ul class="pagination">
            {if $pages.current != $pages.first}
                <li><a href="closedgamemanage?page={$pages.first}"> &lt;&lt; </a>
            {/if}

            {if isset($pages.previous)}
                <li><a href="closedgamemanage?page={$pages.previous}">  &lt; </a></li>
            {/if}

            {foreach item=p from=$pages.pagesInRange}

                {if $pages.current == $p}
                    <li><span>{$p}</span></li>
                {else}
                    <li><a href="closedgamemanage?page={$p}">  {$p} </a></li>
                {/if}
            {/foreach}

            {if isset($pages.next)}
                <li><a href="closedgamemanage?page={$pages.next}"> &gt; </a></li>
            {/if}

            {if $pages.current != $pages.last}
                <li><a href="closedgamemanage?page={$pages.last}"> &gt;&gt; </a></li>
            {/if}
        </ul>
    </div>

	{* pagination links *}
{else}
    ゲームはありません。
{/if}

{include file=$footer}